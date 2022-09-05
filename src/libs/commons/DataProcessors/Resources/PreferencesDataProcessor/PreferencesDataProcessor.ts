// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable class-methods-use-this */

import { AbstractDataProcessor } from '../../AbstractorDataProcessor';
import { ProcessorDataType, ProcessorReturnType } from '../interfaces/DataProcessorInterface';

export class PreferenceDataProcessor extends AbstractDataProcessor {
  process(data: ProcessorDataType): ProcessorReturnType {
    if ('idPkg:Preferences' in data) {
      const processedData = { documentPreferences: data['idPkg:Preferences'].DocumentPreference };
      return { processedData, dataStoreName: 'Preferences' };
    }
    return super.process(data);
  }
}
