import {
  DataProcessorInterface,
  ProcessorDataType,
  ProcessorReturnType,
} from './Resources/interfaces/DataProcessorInterface';

export abstract class AbstractDataProcessor implements DataProcessorInterface {
  private nextDataProcessor!: DataProcessorInterface;

  public setNext(dataProcessor: DataProcessorInterface): DataProcessorInterface {
    this.nextDataProcessor = dataProcessor;
    return dataProcessor;
  }

  public process(data: ProcessorDataType): ProcessorReturnType {
    if (this.nextDataProcessor) {
      return this.nextDataProcessor.process(data);
    }
    throw new Error('No matching operation');
  }
}
