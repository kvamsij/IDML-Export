import { FastXMLParser } from '@src/libs/commons/FastXMLParser';
import { FileParser } from '@src/libs/commons/FileParser/FileParser';
import { FileParserInterface } from '@src/libs/commons/FileParser/FileParser.interface';
import { StylesMockData } from '@src/libs/commons/DataProcessors/Resources/StylesDataProcessor/Styles.data.mock';
import { ProcessorDataType } from '../interfaces/DataProcessorInterface';
import { IDMLFonts } from '../types/Fonts.type';
import { FontsMockData } from './Fonts.data.mock';
import { FontsDataProcessor } from './FontsDataProcessor';

let parsedData: ProcessorDataType;
let fileParser: FileParserInterface;

beforeAll(async () => {
  const xmlParser = new FastXMLParser().getInstance();
  fileParser = new FileParser(xmlParser);
  parsedData = await fileParser.parse(FontsMockData);
});

describe('Fonts', () => {
  describe('Initialization', () => {
    it('should be able to call new() on Fonts class', () => {
      const fonts = new FontsDataProcessor();
      expect(fonts).toBeTruthy();
    });
    it('should be able to call process()', async () => {
      const fonts = new FontsDataProcessor();
      const processSpy = jest.spyOn(fonts, 'process').mockImplementation();
      fonts.process(parsedData);
      expect(processSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('Errors', () => {
    it('should not process data other than IDMLFonts but throw an error', async () => {
      const fonts = new FontsDataProcessor();
      const processSpy = jest.spyOn(fonts, 'process');
      const dataToProduceError: ProcessorDataType = await fileParser.parse(StylesMockData);

      try {
        fonts.process(dataToProduceError);
      } catch (error) {
        //
      } finally {
        expect(processSpy).toThrowError();
      }
    });
  });

  describe('Implementation', () => {
    it('should return Array of Font', async () => {
      const fonts = new FontsDataProcessor();
      const expectedData = (parsedData as IDMLFonts)['idPkg:Fonts'].FontFamily.flatMap((fontFamily) => fontFamily.Font);
      const processedData = fonts.process(parsedData);
      expect(processedData).toMatchObject(expectedData);
    });
  });
});
