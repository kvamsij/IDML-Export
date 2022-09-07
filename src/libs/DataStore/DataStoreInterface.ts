import { MapDataType } from '../commons/DataLoaders/DataLoaderClientInterface';

export interface DataStoreInterface {
  create(): Promise<Map<string, MapDataType>>;
}
