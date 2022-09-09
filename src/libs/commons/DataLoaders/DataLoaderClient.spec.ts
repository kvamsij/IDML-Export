import { DataProcessorClient } from '../DataProcessors/DataProcessorClient';
import { GetPathsReturnType, ProcessorReturnType } from '../DataProcessors/Resources/interfaces/DataProcessorInterface';
import { DataLoaderClient } from './DataLoaderClient';
import { preferences } from './mockData/Preferences.data.mock';
import { styles } from './mockData/Styles.data.mock';

const mockData = { StylesMockData: styles, PreferencesMockData: preferences };

describe('DataLoaderClient', () => {
  it('should be able to call new() on DataLoaders class', () => {
    const dataLoader = new DataLoaderClient();
    expect(dataLoader).toBeTruthy();
  });

  it('should be able to call load()', async () => {
    const dataLoader = new DataLoaderClient();
    const processedData = new DataProcessorClient().process(mockData.StylesMockData) as Exclude<
      ProcessorReturnType,
      GetPathsReturnType
    >;
    const loaderSpy = jest.spyOn(dataLoader, 'load').mockImplementation();
    dataLoader.load({ processedData, dataStore: new Map() });
    expect(loaderSpy).toBeCalledTimes(1);
  });

  it('should have been called with provided data to load()', async () => {
    const dataLoader = new DataLoaderClient();
    const dataProcessor = new DataProcessorClient();
    const processedData = dataProcessor.process(mockData.StylesMockData) as Exclude<
      ProcessorReturnType,
      GetPathsReturnType
    >;
    const loadSpy = jest.spyOn(dataLoader, 'load').mockImplementation();
    dataLoader.load({ dataStore: new Map(), processedData });
    expect(loadSpy).toBeCalledWith({ dataStore: new Map(), processedData });
  });
});
