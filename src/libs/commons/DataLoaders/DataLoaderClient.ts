// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable class-methods-use-this */

import { DataLoaderClientInterface, DataLoaderDataType } from './DataLoaderClientInterface';

export class DataLoaderClient implements DataLoaderClientInterface {
  load(options: DataLoaderDataType): void {
    const { dataStore, processedData } = options;

    if (Array.isArray(processedData)) {
      processedData.forEach((element) => dataStore.set(element.Self, element));
    } else {
      Object.keys(processedData).forEach((dataKey) => dataStore.set(dataKey, processedData[dataKey]));
    }
  }
}
