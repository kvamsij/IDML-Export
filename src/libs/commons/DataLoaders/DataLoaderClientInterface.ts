import { ProcessorReturnType } from '../DataProcessors/Resources/interfaces/DataProcessorInterface';
import { Font } from '../DataProcessors/Resources/types/Fonts.type';
import { Color } from '../DataProcessors/Resources/types/Graphic.type';
import { DocumentPreference } from '../DataProcessors/Resources/types/Preferences.type';
import { CharacterStyle, ParagraphStyle } from '../DataProcessors/Resources/types/Styles.type';
import { Spread } from '../DataProcessors/Spreads/types/Spreads.type';
import { Story } from '../DataProcessors/Stories/types/Story.type';

export type MapDataType = Color | Font | CharacterStyle | ParagraphStyle | DocumentPreference | Story | Spread;

export type DataLoaderDataType = { dataStore: Map<string, MapDataType>; processedData: ProcessorReturnType };

export interface DataLoaderClientInterface {
  load(options: DataLoaderDataType): void;
}
