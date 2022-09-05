import { DataProcessor } from '../DataProcessors';
import { DataLoader } from './DataLoader';
import { preferences } from './mockData/Preferences.data.mock';
import { styles } from './mockData/Styles.data.mock';

const mockData = { StylesMockData: styles, PreferencesMockData: preferences };

describe('DataLoader', () => {
  it('should be able to call new() on DataLoaders class', () => {
    const dataLoader = new DataLoader();
    expect(dataLoader).toBeTruthy();
  });

  it('should be able to call load()', async () => {
    const dataLoader = new DataLoader();
    const { dataStoreName, processedData } = new DataProcessor(mockData.StylesMockData).process();
    const loaderSpy = jest.spyOn(dataLoader, 'load');
    dataLoader.load({ dataStoreName, processedData });
    expect(loaderSpy).toBeCalledTimes(1);
  });

  it('should have been called with provided data to load()', async () => {
    const dataLoader = new DataLoader();
    const dataProcessor = new DataProcessor(mockData.StylesMockData);
    const { dataStoreName, processedData } = dataProcessor.process();
    const loadSpy = jest.spyOn(dataLoader, 'load');
    dataLoader.load({ dataStoreName, processedData });
    expect(loadSpy).toHaveBeenCalledWith({ dataStoreName, processedData });
  });

  it(`should return an Object with key as 'Styles' on load() call`, async () => {
    const dataLoader = new DataLoader();
    const { dataStoreName, processedData } = new DataProcessor(mockData.StylesMockData).process();
    const data = dataLoader.load({ dataStoreName, processedData });
    expect(data).toHaveProperty('Styles');
  });

  it(`should return an Object with key as 'Preferences' on load() call`, async () => {
    const dataLoader = new DataLoader();
    const { dataStoreName, processedData } = new DataProcessor(mockData.PreferencesMockData).process();
    const data = dataLoader.load({ dataStoreName, processedData });
    expect(data).toHaveProperty('Preferences');
  });
});
