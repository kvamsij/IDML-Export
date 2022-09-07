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

describe('FileOperator Operations should have been called once', () => {
  it('should call read(), parse(), process(), load() once when operate() is called', async () => {
    expect.assertions(4);
    const fileOperator = new FileOperator(fileOperations, dataStore);

    const readMethodSpy = jest.spyOn(fileReader, 'read').mockResolvedValue(FontsMockData);
    const parseMethodSpy = jest.spyOn(fileParser, 'parse');
    const processMethodSpy = jest.spyOn(dataProcessor, 'process');
    const loadMethodSpy = jest.spyOn(dataLoader, 'load');
    await fileOperator.operate(filePath);

    expect(readMethodSpy).toHaveBeenCalledTimes(1);
    expect(parseMethodSpy).toHaveBeenCalledTimes(1);
    expect(processMethodSpy).toHaveBeenCalledTimes(1);
    expect(loadMethodSpy).toHaveBeenCalledTimes(1);

    readMethodSpy.mockReset();
    parseMethodSpy.mockReset();
    processMethodSpy.mockReset();
    loadMethodSpy.mockReset();
    jest.resetAllMocks();
    jest.clearAllMocks();
  });
});
