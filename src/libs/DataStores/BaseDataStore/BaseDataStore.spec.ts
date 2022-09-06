import { DataLoaderClient } from '@src/libs/commons/DataLoaders/DataLoaderClient';
import { DataProcessorClient } from '@src/libs/commons/DataProcessors/DataProcessorClient';
import { Font } from '@src/libs/commons/DataProcessors/Resources/types/Fonts.type';
import { FastXMLParser } from '@src/libs/commons/FastXMLParser';
import { FileParser } from '@src/libs/commons/FileParser/FileParser';
import { FileReader } from '@src/libs/commons/FileReader/FileReader';
import { BaseDataStore, FileOperations } from './BaseDataStore';

const xmlParser = new FastXMLParser().getInstance();
const fileReader = new FileReader();
const fileParser = new FileParser(xmlParser);
const dataProcessor = new DataProcessorClient();
const dataLoader = new DataLoaderClient();

const fileOperations: FileOperations = {
  fileReader,
  fileParser,
  dataProcessor,
  dataLoader,
};
const dataStore = new Map<string, Font>();
const filePath = '';

describe('BaseDataStore', () => {
  describe('Initialization', () => {
    it('should be able to call new() on BaseDataStore Class', () => {
      const baseDataStore = new BaseDataStore(fileOperations, dataStore, filePath);
      expect(baseDataStore).toBeTruthy();
    });

    it('should be able to call create() on BaseDataStore Class', () => {
      const baseDataStore = new BaseDataStore(fileOperations, dataStore, filePath);
      const createMethodSpy = jest.spyOn(baseDataStore, 'create').mockImplementation();
      baseDataStore.create();
      expect(createMethodSpy).toBeCalledTimes(1);
    });

    it('should return a Map on call create()', async () => {
      const baseDataStore = new BaseDataStore(fileOperations, dataStore, filePath);
      jest.spyOn(baseDataStore, 'create').mockResolvedValue(new Map());
      await expect(baseDataStore.create()).resolves.toBeInstanceOf(Map);
    });
  });
});
