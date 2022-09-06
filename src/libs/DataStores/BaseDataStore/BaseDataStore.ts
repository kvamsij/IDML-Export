import { DataLoaderClientInterface, MapDataType } from '@src/libs/commons/DataLoaders/DataLoaderClientInterface';
import { DataProcessorClientInterface } from '@src/libs/commons/DataProcessors/DataProcessorClientInterface';
import { ProcessorDataType } from '@src/libs/commons/DataProcessors/Resources/interfaces/DataProcessorInterface';
import { FileParserInterface } from '@src/libs/commons/FileParser/FileParser.interface';
import { FileReaderInterface } from '@src/libs/commons/FileReader/FileReader.interface';
import { BaseDataStoreInterface } from './BaseDataStoreInterface';

export type FileOperations = {
  fileReader: FileReaderInterface;
  fileParser: FileParserInterface;
  dataProcessor: DataProcessorClientInterface;
  dataLoader: DataLoaderClientInterface;
};

export class BaseDataStore implements BaseDataStoreInterface {
  constructor(
    private operations: FileOperations,
    private dataStore: Map<string, MapDataType>,
    private filePath: string
  ) {}

  async create() {
    const { fileReader, fileParser, dataProcessor, dataLoader } = this.operations;
    const fileData = await fileReader.read(this.filePath);
    const parsedData = await fileParser.parse<ProcessorDataType>(fileData);
    const processedData = await dataProcessor.process(parsedData);
    dataLoader.load({ dataStore: this.dataStore, processedData });
    return this.dataStore;
  }
}
