import { DataProcessor } from '../DataProcessors';
import { FontsMockData } from '../DataProcessors/Resources/FontsDataProcessor/Fonts.data.mock';
import { GraphicsMockData } from '../DataProcessors/Resources/GraphicDataProcessor/Graphics.data.mock';
import { ProcessorDataType } from '../DataProcessors/Resources/interfaces/DataProcessorInterface';
import { PreferencesMockData } from '../DataProcessors/Resources/PreferencesDataProcessor/Preferences.data.mock';
import { StylesMockData } from '../DataProcessors/Resources/StylesDataProcessor/Styles.data.mock';
import { FastXMLParser } from '../FastXMLParser';
import { FileParser } from '../FileParser/FileParser';
import { DataLoader } from './DataLoader';

let fileParser: FileParser;
let mockData: { [key: string]: string };

beforeAll(async () => {
  const xmlParser = new FastXMLParser().getInstance();
  fileParser = new FileParser(xmlParser);
  mockData = { StylesMockData, GraphicsMockData, PreferencesMockData, FontsMockData };
});

describe('DataLoader', () => {
  it('should be able to call new() on DataLoaders class', () => {
    const dataLoader = new DataLoader();
    expect(dataLoader).toBeTruthy();
  });

  it('should be able to call load()', async () => {
    const dataLoader = new DataLoader();
    const parsedData: ProcessorDataType = await fileParser.parse(mockData.StylesMockData);
    const processedData = new DataProcessor(parsedData).process();
    const loaderSpy = jest.spyOn(dataLoader, 'load');
    dataLoader.load({ dataStoreName: 'styles', data: processedData });
    expect(loaderSpy).toBeCalledTimes(1);
  });

  it('should have been called with provided data to load()', async () => {
    const dataLoader = new DataLoader();
    const parsedData: ProcessorDataType = await fileParser.parse(mockData.StylesMockData);
    const dataProcessor = new DataProcessor(parsedData);
    const processedData = dataProcessor.process();
    const loadSpy = jest.spyOn(dataLoader, 'load');
    dataLoader.load({ dataStoreName: 'styles', data: processedData });
    expect(loadSpy).toHaveBeenCalledWith({ dataStoreName: 'styles', data: processedData });
  });

  it(`should return an Object with key as 'styles' on load() call`, async () => {
    const dataLoader = new DataLoader();
    const parsedData: ProcessorDataType = await fileParser.parse(mockData.StylesMockData);
    const processedData = new DataProcessor(parsedData).process();
    const data = dataLoader.load({ dataStoreName: 'styles', data: processedData });
    expect(data).toHaveProperty('styles');
  });

  it(`should return an Object with key as 'documentPreferences' on load() call`, async () => {
    const dataLoader = new DataLoader();
    const parsedData: ProcessorDataType = await fileParser.parse(mockData.PreferencesMockData);
    const processedData = new DataProcessor(parsedData).process();
    const data = dataLoader.load({ dataStoreName: 'documentPreferences', data: processedData });
    expect(data).toHaveProperty('documentPreferences');
  });
});
