import { ProcessorDataType, ProcessorReturnType } from './Resources/interfaces/DataProcessorInterface';

export interface DataProcessorClientInterface {
  process(data: ProcessorDataType): ProcessorReturnType;
}
