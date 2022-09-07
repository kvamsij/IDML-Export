import { DataLoaderClientInterface, MapDataType } from '../commons/DataLoaders/DataLoaderClientInterface';
import { DataProcessorClientInterface } from '../commons/DataProcessors/DataProcessorClientInterface';
import { FileParserInterface } from '../commons/FileParser/FileParser.interface';
import { FileReaderInterface } from '../commons/FileReader/FileReader.interface';

export type FileOperations = {
  fileReader: FileReaderInterface;
  fileParser: FileParserInterface;
  dataProcessor: DataProcessorClientInterface;
  dataLoader: DataLoaderClientInterface;
};

export interface FileOperatorInterface {
  operate(filePath: string, dataStore: Map<string, MapDataType>): Promise<void>;
}
