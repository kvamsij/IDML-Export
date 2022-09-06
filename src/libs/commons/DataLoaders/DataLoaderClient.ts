// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable class-methods-use-this */
import { ProcessorReturnType } from '../DataProcessors/Resources/interfaces/DataProcessorInterface';
import { Font } from '../DataProcessors/Resources/types/Fonts.type';
import { Color } from '../DataProcessors/Resources/types/Graphic.type';
import { DocumentPreference } from '../DataProcessors/Resources/types/Preferences.type';
import { CharacterStyle, ParagraphStyle } from '../DataProcessors/Resources/types/Styles.type';
import { Spread } from '../DataProcessors/Spreads/types/Spreads.type';
import { Story } from '../DataProcessors/Stories/types/Story.type';

type MapDataType = Color | Font | CharacterStyle | ParagraphStyle | DocumentPreference | Story | Spread;

type DataLoaderDataType = { dataStore: Map<string, MapDataType>; processedData: ProcessorReturnType };

export class DataLoaderClient {
  load(options: DataLoaderDataType): void {
    const { dataStore, processedData } = options;

    if (Array.isArray(processedData)) {
      processedData.forEach((element) => dataStore.set(element.Self, element));
    } else {
      Object.keys(processedData).forEach((dataKey) => dataStore.set(dataKey, processedData[dataKey]));
    }
  }
}
