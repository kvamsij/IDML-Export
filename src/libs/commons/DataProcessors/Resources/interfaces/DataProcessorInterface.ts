import { Font, IDMLFonts } from '../types/Fonts.type';
import { Color, ResourceGraphic } from '../types/Graphic.type';
import { DocumentPreference, IDMLPreferences } from '../types/Preferences.type';
import { CharacterStyle, IDMLStyles, ParagraphStyle } from '../types/Styles.type';

export type ProcessorDataType = ResourceGraphic | IDMLPreferences | IDMLStyles | IDMLFonts | IDMLPreferences;

export type ProcessorReturnType =
  | Color[]
  | { [key: string]: DocumentPreference }
  | Array<CharacterStyle | ParagraphStyle>
  | Font[];

export interface DataProcessorInterface {
  setNext(processor: DataProcessorInterface): DataProcessorInterface;

  process(data: ProcessorDataType): ProcessorReturnType;
}
