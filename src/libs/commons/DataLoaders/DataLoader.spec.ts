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
    const processedData = new DataProcessor(mockData.StylesMockData).process();
    const loaderSpy = jest.spyOn(dataLoader, 'load');
    dataLoader.load({ dataStoreName: 'styles', data: processedData });
    expect(loaderSpy).toBeCalledTimes(1);
  });

  it('should have been called with provided data to load()', async () => {
    const dataLoader = new DataLoader();
    const dataProcessor = new DataProcessor(mockData.StylesMockData);
    const processedData = dataProcessor.process();
    const loadSpy = jest.spyOn(dataLoader, 'load');
    dataLoader.load({ dataStoreName: 'styles', data: processedData });
    expect(loadSpy).toHaveBeenCalledWith({ dataStoreName: 'styles', data: processedData });
  });

  it(`should return an Object with key as 'styles' on load() call`, async () => {
    const dataLoader = new DataLoader();
    const processedData = new DataProcessor(mockData.StylesMockData).process();
    const data = dataLoader.load({ dataStoreName: 'styles', data: processedData });
    expect(data).toHaveProperty('styles');
  });

  it(`should return an Object with key as 'documentPreferences' on load() call`, async () => {
    const dataLoader = new DataLoader();
    const processedData = new DataProcessor(mockData.PreferencesMockData).process();
    const data = dataLoader.load({ dataStoreName: 'documentPreferences', data: processedData });
    expect(data).toHaveProperty('documentPreferences');
  });
});
