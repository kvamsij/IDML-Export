import { AbstractDataProcessor } from '../AbstractorDataProcessor';
import { ProcessorDataType, ProcessorReturnType } from '../Resources/interfaces/DataProcessorInterface';

export class SpreadsDataProcessor extends AbstractDataProcessor {
  process(data: ProcessorDataType): ProcessorReturnType {
    if ('idPkg:Spread' in data) return [data['idPkg:Spread'].Spread];
    return super.process(data);
  }
}
