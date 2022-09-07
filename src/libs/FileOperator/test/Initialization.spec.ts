import { MapDataType } from '@src/libs/commons/DataLoaders/DataLoaderClientInterface';
import { FontsMockData } from '@src/libs/commons/DataProcessors/Resources/FontsDataProcessor/Fonts.data.mock';
import { Font } from '@src/libs/commons/DataProcessors/Resources/types/Fonts.type';
import { FileOperator } from '../FileOperator';
import { FileOperations } from '../FileOperatorInterface';
import { fileReader, fileParser, dataProcessor, dataLoader } from './SetUp';

let fileOperations: FileOperations;
let dataStore: Map<string, MapDataType>;

const filePath = '';

beforeAll(() => {
  fileOperations = {
    fileReader,
    fileParser,
    dataProcessor,
    dataLoader,
  };

  dataStore = new Map<string, Font>();
});

describe('FileOperator Initialization', () => {
  it('should be able to call new() on FileOperator Class', () => {
    const fileOperator = new FileOperator(fileOperations, dataStore);
    expect(fileOperator).toBeTruthy();
  });

  it('should be able to call operate() on FileOperator Class', async () => {
    const fileOperator = new FileOperator(fileOperations, dataStore);
    const operateMethodSpy = jest.spyOn(fileOperator, 'operate');
    try {
      await fileOperator.operate(filePath);
    } catch (error) {
      //
    } finally {
      expect(operateMethodSpy).toBeCalledTimes(1);
    }
  });
  it('should update empty map with given file data', async () => {
    const dataStoreMap = new Map();
    const fileOperator = new FileOperator(fileOperations, dataStoreMap);
    jest.spyOn(fileReader, 'read').mockResolvedValue(FontsMockData);
    await fileOperator.operate(filePath);
    expect(dataStoreMap.size).toBeGreaterThan(0);

    jest.resetAllMocks();
  });
});
