import { DesignMap } from '../../DesignMap/designMap.type';
import { IDMLSpread, Spread } from '../../Spreads/types/Spreads.type';
import { IDMLStory, Story } from '../../Stories/types/Story.type';
import { Font, IDMLFonts } from '../types/Fonts.type';
import { Color, ResourceGraphic } from '../types/Graphic.type';
import { DocumentPreference, IDMLPreferences } from '../types/Preferences.type';
import { CharacterStyle, IDMLStyles, ParagraphStyle } from '../types/Styles.type';

export type GetPathsReturnType = {
  resourcesPaths: {
    graphicPath: string;
    fontsPath: string;
    preferencesPath: string;
    stylesPath: string;
  };
  storyPaths: Array<string>;
  spreadPaths: Array<string>;
};

export type ProcessorDataType =
  | ResourceGraphic
  | IDMLPreferences
  | IDMLStyles
  | IDMLFonts
  | IDMLStory
  | IDMLSpread
  | DesignMap;

export type ProcessorReturnType =
  | Color[]
  | { [key: string]: DocumentPreference }
  | Array<CharacterStyle | ParagraphStyle>
  | Font[]
  | Story[]
  | Spread[]
  | GetPathsReturnType;
export interface DataProcessorInterface {
  setNext(processor: DataProcessorInterface): DataProcessorInterface;

  process(data: ProcessorDataType): ProcessorReturnType;
}
