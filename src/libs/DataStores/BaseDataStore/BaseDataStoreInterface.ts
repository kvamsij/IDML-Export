import { MapDataType } from '@src/libs/commons/DataLoaders/DataLoaderClientInterface';

export interface BaseDataStoreInterface {
  create(): Promise<Map<string, MapDataType>>;
}
