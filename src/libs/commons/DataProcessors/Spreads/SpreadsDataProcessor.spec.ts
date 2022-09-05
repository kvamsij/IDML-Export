import { FastXMLParser } from '@src/libs/commons/FastXMLParser';
import { FileParser } from '@src/libs/commons/FileParser/FileParser';
import { FileParserInterface } from '@src/libs/commons/FileParser/FileParser.interface';
import { GraphicsMockData } from '../Resources/GraphicDataProcessor/Graphics.data.mock';
import { ProcessorDataType } from '../Resources/interfaces/DataProcessorInterface';
import { SpreadsMockData } from './Spreads.data.mock';
import { SpreadsDataProcessor } from './SpreadsDataProcessor';
import { IDMLSpread } from './types/Spreads.type';

let parsedData: ProcessorDataType;
let fileParser: FileParserInterface;

beforeAll(async () => {
  const xmlParser = new FastXMLParser().getInstance();
  fileParser = new FileParser(xmlParser);
  parsedData = await fileParser.parse(SpreadsMockData);
});

describe('Spreads Data Processor', () => {
  describe('Initialization', () => {
    it('should be able to call new() on SpreadsDataProcessor class', () => {
      const spreadsDataProcessor = new SpreadsDataProcessor();
      expect(spreadsDataProcessor).toBeTruthy();
    });
    it('should be able to call process()', async () => {
      const spreadsDataProcessor = new SpreadsDataProcessor();
      const processSpy = jest.spyOn(spreadsDataProcessor, 'process').mockImplementation();
      spreadsDataProcessor.process(parsedData);
      expect(processSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('Errors', () => {
    it('should not process data other than IDMLSpread but throw an error', async () => {
      const spreadsDataProcessor = new SpreadsDataProcessor();
      const processSpy = jest.spyOn(spreadsDataProcessor, 'process');
      const dataToProduceError: ProcessorDataType = await fileParser.parse(GraphicsMockData);

      try {
        spreadsDataProcessor.process(dataToProduceError);
      } catch (error) {
        //
      } finally {
        expect(processSpy).toThrowError();
      }
    });
  });

  describe('Implementation', () => {
    it('should return Array of Story', async () => {
      const spreadsDataProcessor = new SpreadsDataProcessor();

      const { Spread } = (parsedData as IDMLSpread)['idPkg:Spread'];

      const expectedData = [Spread];
      const processedData = spreadsDataProcessor.process(parsedData as IDMLSpread);
      expect(processedData).toMatchObject(expectedData);
    });
  });
});
