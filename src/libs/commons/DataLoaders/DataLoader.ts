// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable class-methods-use-this */
import { ProcessorReturnType } from '../DataProcessors/Resources/interfaces/DataProcessorInterface';
import { Font } from '../DataProcessors/Resources/types/Fonts.type';
import { Color } from '../DataProcessors/Resources/types/Graphic.type';
import { DocumentPreference } from '../DataProcessors/Resources/types/Preferences.type';
import { CharacterStyle, ParagraphStyle } from '../DataProcessors/Resources/types/Styles.type';
import { Spread } from '../DataProcessors/Spreads/types/Spreads.type';
import { Story } from '../DataProcessors/Stories/types/Story.type';

type LoadDataType = { dataStoreName: string; data: ProcessorReturnType };
type MapDataType = Color | Font | CharacterStyle | ParagraphStyle | DocumentPreference | Story | Spread;

type DataLoaderReturnType = {
  [key: string]: Map<string, MapDataType>;
};

export class DataLoader {
  load(options: LoadDataType): DataLoaderReturnType {
    const storeMap = new Map<string, MapDataType>();
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
