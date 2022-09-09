import { ProcessorDataType, ProcessorReturnType } from './Resources/interfaces/DataProcessorInterface';

// start here
export interface DataProcessorClientInterface {
  process(data: ProcessorDataType): ProcessorReturnType;
}
