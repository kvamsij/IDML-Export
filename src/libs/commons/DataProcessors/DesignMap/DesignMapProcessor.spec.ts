import { FastXMLParser } from '../../FastXMLParser';
import { FileParser } from '../../FileParser/FileParser';
import { FileParserInterface } from '../../FileParser/FileParser.interface';
import { ProcessorDataType } from '../Resources/interfaces/DataProcessorInterface';
import { StylesMockData } from '../Resources/StylesDataProcessor/Styles.data.mock';
import { designMapData } from './designMap.mock';
import { DesignMapProcessor } from './DesignMapProcessor';
import { getExpectedData } from './Utils';

let parsedData: ProcessorDataType;
let fileParser: FileParserInterface;

beforeAll(async () => {
  const xmlParser = new FastXMLParser().getInstance();
  fileParser = new FileParser(xmlParser);
  parsedData = await fileParser.parse(designMapData);
});

describe('DesignMap', () => {
  describe('Initialization', () => {
    it('should be able to call new() on designMap data processor class', () => {
      const designMap = new DesignMapProcessor();
      expect(designMap).toBeTruthy();
    });
    it('should be able to call process()', async () => {
      const designMap = new DesignMapProcessor();
      const processSpy = jest.spyOn(designMap, 'process');
      designMap.process(parsedData);
      expect(processSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('Errors', () => {
    it('should not process data other than DesignMap but throw an error', async () => {
      const designMap = new DesignMapProcessor();
      const processSpy = jest.spyOn(designMap, 'process');
      const dataToProduceError: ProcessorDataType = await fileParser.parse(StylesMockData);

      try {
        designMap.process(dataToProduceError);
      } catch (error) {
        //
      } finally {
        expect(processSpy).toThrowError();
      }
    });
  });
  describe('Implementation', () => {
    it('should return Array of Font', async () => {
      const designMap = new DesignMapProcessor();
      const processedData = designMap.process(parsedData);
      expect(processedData).toMatchObject(getExpectedData(parsedData));
    });
  });
});
