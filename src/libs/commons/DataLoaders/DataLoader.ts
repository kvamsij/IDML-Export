// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable class-methods-use-this */
import { ProcessorReturnType } from '../DataProcessors/Resources/interfaces/DataProcessorInterface';
import { Font } from '../DataProcessors/Resources/types/Fonts.type';
import { Color } from '../DataProcessors/Resources/types/Graphic.type';
import { DocumentPreference } from '../DataProcessors/Resources/types/Preferences.type';
import { CharacterStyle, ParagraphStyle } from '../DataProcessors/Resources/types/Styles.type';

type LoadDataType = { dataStoreName: string; data: ProcessorReturnType };
type DataLoaderReturnType = {
  [key: string]: Map<string, Color | Font | CharacterStyle | ParagraphStyle | DocumentPreference>;
};

export class DataLoader {
  load(options: LoadDataType): DataLoaderReturnType {
    const storeMap = new Map<string, Color | Font | CharacterStyle | ParagraphStyle | DocumentPreference>();
    const { dataStoreName, data } = options;
    const result: DataLoaderReturnType = {};

    if (Array.isArray(data)) {
      data.forEach((element) => storeMap.set(element.Self, element));
    } else {
      Object.keys(data).forEach((dataKey) => storeMap.set(dataKey, data[dataKey]));
    }
    result[dataStoreName] = storeMap;
    return result;
  }
}
