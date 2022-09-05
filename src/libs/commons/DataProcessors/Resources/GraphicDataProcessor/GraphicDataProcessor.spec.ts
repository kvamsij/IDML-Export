import { StylesMockData } from '@src/libs/commons/DataProcessors/Resources/StylesDataProcessor/Styles.data.mock';
import { FastXMLParser } from '@src/libs/commons/FastXMLParser';
import { FileParser } from '@src/libs/commons/FileParser/FileParser';
import { FileParserInterface } from '@src/libs/commons/FileParser/FileParser.interface';
import { ProcessorDataType } from '../interfaces/DataProcessorInterface';
import { ResourceGraphic } from '../types/Graphic.type';
import { GraphicDataProcessor } from './GraphicDataProcessor';
import { GraphicsMockData } from './Graphics.data.mock';

let parsedData: ProcessorDataType;
let fileParser: FileParserInterface;

beforeAll(async () => {
  const xmlParser = new FastXMLParser().getInstance();
  fileParser = new FileParser(xmlParser);
  parsedData = await fileParser.parse(GraphicsMockData);
});

describe('Graphic Data Processor', () => {
  describe('Initialization', () => {
    it('should be able to call new() on GraphicDataProcessor class', () => {
      const graphics = new GraphicDataProcessor();
      expect(graphics).toBeTruthy();
    });
    it('should be able to call process()', async () => {
      const fonts = new GraphicDataProcessor();
      const processSpy = jest.spyOn(fonts, 'process').mockImplementation();
      fonts.process(parsedData);
      expect(processSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('Errors', () => {
    it('should not process data other than ResourceGraphic but throw an error', async () => {
      const fonts = new GraphicDataProcessor();
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
    it('should return Array of Color', async () => {
      const fonts = new GraphicDataProcessor();
      const expectedData = (parsedData as ResourceGraphic)['idPkg:Graphic'].Color;
      const { processedData } = fonts.process(parsedData);
      expect(processedData).toMatchObject(expectedData);
    });

    it('should return dataStoreName of Colors', async () => {
      const fonts = new GraphicDataProcessor();
      const { dataStoreName } = fonts.process(parsedData);
      expect(dataStoreName).toStrictEqual('Colors');
    });
  });
});
