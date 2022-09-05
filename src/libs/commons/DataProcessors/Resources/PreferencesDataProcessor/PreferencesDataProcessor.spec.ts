import { StylesMockData } from '@src/libs/commons/DataProcessors/Resources/StylesDataProcessor/Styles.data.mock';
import { FastXMLParser } from '@src/libs/commons/FastXMLParser';
import { FileParser } from '@src/libs/commons/FileParser/FileParser';
import { FileParserInterface } from '@src/libs/commons/FileParser/FileParser.interface';
import { ProcessorDataType } from '../interfaces/DataProcessorInterface';
import { IDMLPreferences } from '../types/Preferences.type';
import { PreferencesMockData } from './Preferences.data.mock';
import { PreferenceDataProcessor } from './PreferencesDataProcessor';

let parsedData: ProcessorDataType;
let fileParser: FileParserInterface;

beforeAll(async () => {
  const xmlParser = new FastXMLParser().getInstance();
  fileParser = new FileParser(xmlParser);
  parsedData = await fileParser.parse(PreferencesMockData);
});

describe('Preferences Data Processor', () => {
  describe('Initialization', () => {
    it('should be able to call new() on PreferenceDataProcessor class', () => {
      const preferences = new PreferenceDataProcessor();
      expect(preferences).toBeTruthy();
    });
    it('should be able to call process()', async () => {
      const preferences = new PreferenceDataProcessor();
      const processSpy = jest.spyOn(preferences, 'process').mockImplementation();
      preferences.process(parsedData);
      expect(processSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('Errors', () => {
    it('should not process data other than IDMLPreferences but throw an error', async () => {
      const preferences = new PreferenceDataProcessor();
      const processSpy = jest.spyOn(preferences, 'process');
      const dataToProduceError: ProcessorDataType = await fileParser.parse(StylesMockData);

      try {
        preferences.process(dataToProduceError);
      } catch (error) {
        //
      } finally {
        expect(processSpy).toThrowError();
      }
    });
  });

  describe('Implementation', () => {
    it('should return type {documentPreferences: DocumentPreference}', async () => {
      const preferences = new PreferenceDataProcessor();
      const expectedData = {
        documentPreferences: (parsedData as IDMLPreferences)['idPkg:Preferences'].DocumentPreference,
      };
      const { processedData } = preferences.process(parsedData);
      expect(processedData).toMatchObject(expectedData);
    });
    it('should return datastoreName Preferences', async () => {
      const preferences = new PreferenceDataProcessor();
      const { dataStoreName } = preferences.process(parsedData);
      expect(dataStoreName).toStrictEqual('Preferences');
    });
  });
});
