// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable class-methods-use-this */
import { AbstractDataProcessor } from '../../AbstractorDataProcessor';
import { ProcessorDataType, ProcessorReturnType } from '../interfaces/DataProcessorInterface';

export class FontsDataProcessor extends AbstractDataProcessor {
  process(data: ProcessorDataType): ProcessorReturnType {
    if ('idPkg:Fonts' in data) {
      const processedData = data['idPkg:Fonts'].FontFamily.flatMap((fontFamily) => fontFamily.Font);
      return { processedData, dataStoreName: 'Fonts' };
    }
    return super.process(data);
  }
}
