// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable class-methods-use-this */
import { AbstractDataProcessor } from '../../AbstractorDataProcessor';
import { ProcessorDataType, ProcessorReturnType } from '../interfaces/DataProcessorInterface';

export class FontsDataProcessor extends AbstractDataProcessor {
  process(data: ProcessorDataType): ProcessorReturnType {
    if ('idPkg:Fonts' in data) {
      return data['idPkg:Fonts'].FontFamily.flatMap((fontFamily) => fontFamily.Font);
    }
    return super.process(data);
  }
}
