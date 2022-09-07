import { MapDataType } from '@src/libs/commons/DataLoaders/DataLoaderClientInterface';
import { Font } from '@src/libs/commons/DataProcessors/Resources/types/Fonts.type';
import { FileOperator } from '../FileOperator';
import { FileOperations } from '../FileOperatorInterface';
import { dataLoader, dataProcessor, fileParser, fileReader } from './SetUp';

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

describe('FileOperator Errors', () => {
  it('should throw an error if file not found', async () => {
    const fileOperator = new FileOperator(fileOperations, dataStore);
    await expect(fileOperator.operate(filePath)).rejects.toThrowError();
  });
  it('should not call parse()', async () => {
    const fileOperator = new FileOperator(fileOperations, dataStore);
    const parseMethodSpy2 = jest.spyOn(fileParser, 'parse');
    try {
      await fileOperator.operate(filePath);
    } catch (error) {
      //
    } finally {
      expect(parseMethodSpy2).not.toHaveBeenCalled();
    }
  });
});
