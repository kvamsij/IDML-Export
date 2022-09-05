// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable class-methods-use-this */

import { AbstractDataProcessor } from '../../AbstractorDataProcessor';
import { ProcessorDataType, ProcessorReturnType } from '../interfaces/DataProcessorInterface';

export class StylesDataProcessor extends AbstractDataProcessor {
  process(data: ProcessorDataType): ProcessorReturnType {
    if ('idPkg:Styles' in data) {
      const { RootCharacterStyleGroup, RootParagraphStyleGroup } = data['idPkg:Styles'];
      const processedData = [...RootCharacterStyleGroup.CharacterStyle, ...RootParagraphStyleGroup.ParagraphStyle];
      return { processedData, dataStoreName: 'Styles' };
    }
    return super.process(data);
  }
}
