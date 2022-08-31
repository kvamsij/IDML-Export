export interface Aid {
  '@_style': string;
  '@_type': string;
  '@_readerVersion': string;
  '@_featureSet': string;
  '@_product': string;
}

export interface XML {
  '@_version': string;
  '@_encoding': string;
  '@_standalone': string;
}

export enum Type {
  Enumeration = 'enumeration',
  String = 'string',
}

export interface FrameColor {
  '#text': string;
  '@_type': Type;
}
export interface ABulletProperties {
  BulletsFont: FrameColor;
  BulletsFontStyle: FrameColor;
}

export interface ABullet {
  Properties: ABulletProperties;
  '@_Self': string;
  '@_CharacterType': string;
  '@_CharacterValue': string;
}

export enum FilePath {
  Empty = '"',
  FilePathOnPage = 'on page',
  ID = '$ID/',
  OnPage = '" on page',
  Page = 'page',
}

export interface AssignmentProperties {
  FrameColor: FrameColor;
}
export interface Assignment {
  Properties: AssignmentProperties;
  '@_Self': string;
  '@_Name': string;
  '@_UserName': FilePath;
  '@_ExportOptions': string;
  '@_IncludeLinksWhenPackage': string;
  '@_FilePath': FilePath;
}

export enum ActiveConditionSet {
  N = 'n',
}
export interface ConditionalTextPreference {
  '@_ShowConditionIndicators': string;
  '@_ActiveConditionSet': ActiveConditionSet;
}

export interface BuildingBlockElement {
  '@_Self': string;
  '@_BlockType': string;
  '@_AppliedCharacterStyle': ActiveConditionSet;
  '@_CustomText': FilePath;
  '@_AppliedDelimiter': FilePath;
  '@_IncludeDelimiter': string;
}
export interface CrossReferenceFormat {
  BuildingBlock: BuildingBlockElement[] | BuildingBlockElement;
  '@_Self': string;
  '@_Name': string;
  '@_AppliedCharacterStyle': ActiveConditionSet;
}

export interface DocumentUserProperties {
  UserColor: FrameColor;
}
export interface DocumentUser {
  Properties: DocumentUserProperties;
  '@_Self': string;
  '@_UserName': string;
}

export interface IndexingSortOption {
  '@_Self': string;
  '@_Name': string;
  '@_Include': string;
  '@_Priority': string;
  '@_HeaderType': string;
}

export interface LayerProperties {
  LayerColor: FrameColor;
}

export interface Layer {
  Properties: LayerProperties;
  '@_Self': string;
  '@_Name': string;
  '@_Visible': string;
  '@_Locked': string;
  '@_IgnoreWrap': string;
  '@_ShowGuides': string;
  '@_LockGuides': string;
  '@_UI': string;
  '@_Expendable': string;
  '@_Printable': string;
}

export interface LinkedPageItemOption {
  '@_UpdateLinkWhileSaving': string;
  '@_WarnOnUpdateOfEditedPageItem': string;
  '@_PreserveSizeAndShape': string;
  '@_PreserveAppearance': string;
  '@_PreserveInteractivity': string;
  '@_PreserveFrameContent': string;
  '@_PreserveOthers': string;
}

export interface LinkedStoryOption {
  '@_UpdateWhileSaving': string;
  '@_WarnOnUpdateOfEditedStory': string;
  '@_RemoveForcedLineBreaks': string;
  '@_ApplyStyleMappings': string;
}

export interface GridDataInformationProperties {
  AppliedFont: FrameColor;
}

export interface GridDataInformation {
  Properties: GridDataInformationProperties;
  '@_FontStyle': string;
  '@_PointSize': string;
  '@_CharacterAki': string;
  '@_LineAki': string;
  '@_HorizontalScale': string;
  '@_VerticalScale': string;
  '@_LineAlignment': string;
  '@_GridAlignment': string;
  '@_CharacterAlignment': string;
}
export interface NamedGrid {
  GridDataInformation: GridDataInformation;
  '@_Self': string;
  '@_Name': string;
}

export interface NumberingList {
  '@_Self': string;
  '@_Name': string;
  '@_ContinueNumbersAcrossStories': string;
  '@_ContinueNumbersAcrossDocuments': string;
}
export interface SectionProperties {
  PageNumberStyle: FrameColor;
}
export interface Section {
  Properties: SectionProperties;
  '@_Self': string;
  '@_Length': string;
  '@_AlternateLayoutLength': string;
  '@_AlternateLayout': string;
  '@_Pagination': string;
  '@_PaginationMaster': ActiveConditionSet;
  '@_Name': string;
  '@_ContinueNumbering': string;
  '@_IncludeSectionPrefix': string;
  '@_Marker': string;
  '@_PageStart': string;
  '@_SectionPrefix': string;
}

export interface TaggedPDFPreference {
  '@_StructureOrder': string;
}

export interface VariablePreference {
  '@_TextBefore': string;
  '@_Format': string;
  '@_TextAfter': string;
  '@_Scope'?: string;
}

export interface FileNameVariablePreference {
  '@_TextBefore': string;
  '@_IncludePath': string;
  '@_IncludeExtension': string;
  '@_TextAfter': string;
}

export interface MatchParagraphStylePreference {
  '@_TextBefore': string;
  '@_TextAfter': string;
  '@_AppliedParagraphStyle': string;
  '@_SearchStrategy': string;
  '@_ChangeCase': string;
  '@_DeleteEndPunctuation': string;
}
export interface TextVariable {
  '@_Self': string;
  '@_Name': string;
  '@_VariableType': string;
  ChapterNumberVariablePreference?: VariablePreference;
  DateVariablePreference?: VariablePreference;
  FileNameVariablePreference?: FileNameVariablePreference;
  PageNumberVariablePreference?: VariablePreference;
  MatchParagraphStylePreference?: MatchParagraphStylePreference;
}

export interface IDPkg {
  '@_src': string;
}

export interface Document {
  Language: { [key: string]: string };
  'idPkg:Graphic': IDPkg;
  'idPkg:Fonts': IDPkg;
  'idPkg:Styles': IDPkg;
  NumberingList: NumberingList;
  NamedGrid: NamedGrid;
  'idPkg:Preferences': IDPkg;
  LinkedStoryOption: LinkedStoryOption;
  LinkedPageItemOption: LinkedPageItemOption;
  TaggedPDFPreference: TaggedPDFPreference;
  WatermarkPreference: { [key: string]: string };
  ConditionalTextPreference: ConditionalTextPreference;
  TextVariable: TextVariable[];
  'idPkg:Tags': IDPkg;
  Layer: Layer[];
  'idPkg:MasterSpread': IDPkg;
  'idPkg:Spread': IDPkg;
  Section: Section;
  DocumentUser: DocumentUser;
  CrossReferenceFormat: CrossReferenceFormat[];
  'idPkg:BackingStory': IDPkg;
  'idPkg:Story': IDPkg[];
  IndexingSortOption: IndexingSortOption[];
  ABullet: ABullet[];
  Assignment: Assignment;
  '@_xmlns:idPkg': string;
  '@_DOMVersion': string;
  '@_Self': string;
  '@_StoryList': string;
  '@_ZeroPoint': string;
  '@_ActiveLayer': string;
  '@_CMYKProfile': string;
  '@_RGBProfile': string;
  '@_SolidColorIntent': string;
  '@_AfterBlendingIntent': string;
  '@_DefaultImageIntent': string;
  '@_RGBPolicy': string;
  '@_CMYKPolicy': string;
  '@_AccurateLABSpots': string;
}

export interface DesignMap {
  Document: Document;
}
