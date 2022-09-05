// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable class-methods-use-this */
import { AbstractDataProcessor } from '../../AbstractorDataProcessor';
import { ProcessorDataType, ProcessorReturnType } from '../interfaces/DataProcessorInterface';

export class GraphicDataProcessor extends AbstractDataProcessor {
  process(data: ProcessorDataType): ProcessorReturnType {
    if ('idPkg:Graphic' in data) {
      const processedData = data['idPkg:Graphic'].Color;
      return { processedData, dataStoreName: 'Colors' };
    }
    return super.process(data);
  }
}
