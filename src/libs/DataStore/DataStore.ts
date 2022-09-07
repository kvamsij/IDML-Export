import { MapDataType } from '../commons/DataLoaders/DataLoaderClientInterface';
import { FileOperator } from '../FileOperator/FileOperator';
import { FileOperations, FileOperatorInterface } from '../FileOperator/FileOperatorInterface';
import { DataStoreInterface } from './DataStoreInterface';

export class DataStore implements DataStoreInterface {
  fileOperator: FileOperatorInterface;

  private dataStore: Map<string, MapDataType>;

  private filePaths: string[];

  constructor(fileOperations: FileOperations, filePaths: string[]) {
    this.dataStore = new Map();
    this.fileOperator = new FileOperator(fileOperations, this.dataStore);
    this.filePaths = filePaths;
  }

  async create(): Promise<Map<string, MapDataType>> {
    if (this.filePaths.length === 0) throw new Error('FilePaths cannot be empty');
    // eslint-disable-next-line no-restricted-syntax
    for (const filePath of this.filePaths) {
      // eslint-disable-next-line no-await-in-loop
      await this.fileOperator.operate(filePath, this.dataStore);
    }
    return this.dataStore;
  }
}
