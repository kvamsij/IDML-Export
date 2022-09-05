import { DataProcessor } from '.';
import { FastXMLParser } from '../FastXMLParser';
import { FileParser } from '../FileParser/FileParser';
import { FileParserInterface } from '../FileParser/FileParser.interface';
import { GraphicsMockData } from './Resources/GraphicDataProcessor/Graphics.data.mock';
import { ProcessorDataType } from './Resources/interfaces/DataProcessorInterface';
import { ResourceGraphic } from './Resources/types/Graphic.type';

let parsedData: ProcessorDataType;
let fileParser: FileParserInterface;

beforeAll(async () => {
  const xmlParser = new FastXMLParser().getInstance();
  fileParser = new FileParser(xmlParser);
  parsedData = await fileParser.parse(GraphicsMockData);
});

describe('DataProcessor', () => {
  it('should be able to call new() on DataProcessor Class', async () => {
    const dataProcessor = new DataProcessor(parsedData);
    expect(dataProcessor).toBeTruthy();
  });
  it('should be able to call process() on DataProcessor Class', async () => {
    const dataProcessor = new DataProcessor(parsedData);
    const processSpy = jest.spyOn(dataProcessor, 'process').mockImplementation();
    dataProcessor.process();
    expect(processSpy).toHaveBeenCalledTimes(1);
  });

  it('should return Array of Color[] when passed Graphics data', () => {
    const { processedData } = new DataProcessor(parsedData).process();
    const expectedData = (parsedData as ResourceGraphic)['idPkg:Graphic'].Color;
    expect(processedData).toMatchObject(expectedData);
  });
});
