import { MapDataType } from '../commons/DataLoaders/DataLoaderClientInterface';
import { ProcessorDataType } from '../commons/DataProcessors/Resources/interfaces/DataProcessorInterface';
import { FileOperations, FileOperatorInterface } from './FileOperatorInterface';

export class FileOperator implements FileOperatorInterface {
  constructor(private operations: FileOperations, private dataStore: Map<string, MapDataType>) {}

  async operate(filePath: string): Promise<void> {
    try {
      const { fileReader, fileParser, dataProcessor, dataLoader } = this.operations;
      const fileData = await fileReader.read(filePath);
      const parsedData = await fileParser.parse<ProcessorDataType>(fileData);
      const processedData = await dataProcessor.process(parsedData);
      dataLoader.load({ dataStore: this.dataStore, processedData });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
