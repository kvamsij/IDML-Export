import { isMap } from 'util/types';
import { DataLoaderClient } from '../commons/DataLoaders/DataLoaderClient';
import { DataProcessorClient } from '../commons/DataProcessors/DataProcessorClient';
import { FontsMockData } from '../commons/DataProcessors/Resources/FontsDataProcessor/Fonts.data.mock';
import { FastXMLParser } from '../commons/FastXMLParser';
import { FileParser } from '../commons/FileParser/FileParser';
import { FileReader } from '../commons/FileReader/FileReader';
import { FileOperations } from '../FileOperator/FileOperatorInterface';
import { DataStore } from './DataStore';

const xmlParser = new FastXMLParser().getInstance();
const fileReader = new FileReader();
const fileParser = new FileParser(xmlParser);
const dataProcessor = new DataProcessorClient();
const dataLoader = new DataLoaderClient();

const operations: FileOperations = {
  fileReader,
  fileParser,
  dataProcessor,
  dataLoader,
};

const filePaths: string[] = [];
describe('DataStore', () => {
  describe('Initialization', () => {
    it('should be able to call new() on DataStore class', () => {
      const dataStore = new DataStore(operations, filePaths);
      expect(dataStore).toBeTruthy();
    });
    it('should be able to call create() on DataStore class', async () => {
      const dataStore = new DataStore(operations, filePaths);
      const createMethodSpy = jest.spyOn(dataStore, 'create');
      try {
        await dataStore.create();
      } catch (error) {
        //
      } finally {
        expect(createMethodSpy).toHaveBeenCalledTimes(1);
      }
    });
  });
  describe('Errors', () => {
    it('should throw an error if filePaths is empty array', async () => {
      const dataStore = new DataStore(operations, filePaths);
      await expect(dataStore.create()).rejects.toThrowError('FilePaths cannot be empty');
    });
  });
  describe('Implementation', () => {
    it('should return a Map', async () => {
      expect.assertions(2);
      jest.spyOn(fileReader, 'read').mockResolvedValue(FontsMockData);
      const fakePaths = ['file1.xml', 'file2.xml'];
      const dataStore = await new DataStore(operations, fakePaths).create();
      expect(dataStore.size).toBeGreaterThan(0);
      expect(isMap(dataStore)).toBeTruthy();
    });
  });
});
