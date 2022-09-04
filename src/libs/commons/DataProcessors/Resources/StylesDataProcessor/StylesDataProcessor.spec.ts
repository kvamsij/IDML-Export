import { StylesMockData } from '@src/libs/commons/DataProcessors/Resources/StylesDataProcessor/Styles.data.mock';
import { FastXMLParser } from '@src/libs/commons/FastXMLParser';
import { FileParser } from '@src/libs/commons/FileParser/FileParser';
import { FileParserInterface } from '@src/libs/commons/FileParser/FileParser.interface';
import { GraphicsMockData } from '../GraphicDataProcessor/Graphics.data.mock';
import { ProcessorDataType } from '../interfaces/DataProcessorInterface';
import { IDMLPreferences } from '../types/Preferences.type';
import { IDMLStyles } from '../types/Styles.type';
import { StylesDataProcessor } from './StylesDataProcessor';

let parsedData: ProcessorDataType;
let fileParser: FileParserInterface;

beforeAll(async () => {
  const xmlParser = new FastXMLParser().getInstance();
  fileParser = new FileParser(xmlParser);
  parsedData = await fileParser.parse(StylesMockData);
});

describe('Styles Data Processor', () => {
  describe('Initialization', () => {
    it('should be able to call new() on StylesDataProcessor class', () => {
      const preferences = new StylesDataProcessor();
      expect(preferences).toBeTruthy();
    });
    it('should be able to call process()', async () => {
      const preferences = new StylesDataProcessor();
      const processSpy = jest.spyOn(preferences, 'process').mockImplementation();
      preferences.process(parsedData);
      expect(processSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('Errors', () => {
    it('should not process data other than IDMLStyles but throw an error', async () => {
      const preferences = new StylesDataProcessor();
      const processSpy = jest.spyOn(preferences, 'process');
      const dataToProduceError: ProcessorDataType = await fileParser.parse(GraphicsMockData);

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
    it('should return Array of CharacterStyle and ParagraphStyle', async () => {
      const preferences = new StylesDataProcessor();

      const {
        RootCharacterStyleGroup: { CharacterStyle },
        RootParagraphStyleGroup: { ParagraphStyle },
      } = (parsedData as IDMLStyles)['idPkg:Styles'];

      const expectedData = [...CharacterStyle, ...ParagraphStyle];
      const processedData = preferences.process(parsedData);
      expect(processedData).toMatchObject(expectedData);
    });
  });
});
