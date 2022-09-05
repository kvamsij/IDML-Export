import { FastXMLParser } from '@src/libs/commons/FastXMLParser';
import { FileParser } from '@src/libs/commons/FileParser/FileParser';
import { FileParserInterface } from '@src/libs/commons/FileParser/FileParser.interface';
import { GraphicsMockData } from '../Resources/GraphicDataProcessor/Graphics.data.mock';
import { ProcessorDataType } from '../Resources/interfaces/DataProcessorInterface';
import { StoryMockData } from './Story.data.mock';
import { StoryDataProcessor } from './StoryDataProcessor';
import { IDMLStory } from './types/Story.type';

let parsedData: ProcessorDataType;
let fileParser: FileParserInterface;

beforeAll(async () => {
  const xmlParser = new FastXMLParser().getInstance();
  fileParser = new FileParser(xmlParser);
  parsedData = await fileParser.parse(StoryMockData);
});

describe('Story Data Processor', () => {
  describe('Initialization', () => {
    it('should be able to call new() on StoryDataProcessor class', () => {
      const storyDataProcessor = new StoryDataProcessor();
      expect(storyDataProcessor).toBeTruthy();
    });
    it('should be able to call process()', async () => {
      const storyDataProcessor = new StoryDataProcessor();
      const processSpy = jest.spyOn(storyDataProcessor, 'process').mockImplementation();
      storyDataProcessor.process(parsedData);
      expect(processSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('Errors', () => {
    it('should not process data other than IDMLStory but throw an error', async () => {
      const storyDataProcessor = new StoryDataProcessor();
      const processSpy = jest.spyOn(storyDataProcessor, 'process');
      const dataToProduceError: ProcessorDataType = await fileParser.parse(GraphicsMockData);

      try {
        storyDataProcessor.process(dataToProduceError);
      } catch (error) {
        //
      } finally {
        expect(processSpy).toThrowError();
      }
    });
  });

  describe('Implementation', () => {
    it('should return Array of Story', async () => {
      const storyDataProcessor = new StoryDataProcessor();

      const { Story } = (parsedData as IDMLStory)['idPkg:Story'];

      const expectedData = [Story];
      const processedData = storyDataProcessor.process(parsedData as IDMLStory);
      expect(processedData).toMatchObject(expectedData);
    });
  });
});
