// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable class-methods-use-this */

import { AbstractDataProcessor } from '../AbstractorDataProcessor';
import { ProcessorDataType, ProcessorReturnType } from '../Resources/interfaces/DataProcessorInterface';

export class StoryDataProcessor extends AbstractDataProcessor {
  process(data: ProcessorDataType): ProcessorReturnType {
    if ('idPkg:Story' in data) return [data['idPkg:Story'].Story];
    return super.process(data);
  }
}
