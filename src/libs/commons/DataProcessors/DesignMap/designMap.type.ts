export type Aid = {
  style: string;
  type: string;
  readerVersion: string;
  featureSet: string;
  product: string;
};

export type XML = {
  version: string;
  encoding: string;
  standalone: string;
};

export enum Type {
  Enumeration = 'enumeration',
  String = 'string',
}

export type FrameColor = {
  '#text': string;
  type: Type;
};
export type ABulletProperties = {
  BulletsFont: FrameColor;
  BulletsFontStyle: FrameColor;
};

export type ABullet = {
  Properties: ABulletProperties;
  Self: string;
  CharacterType: string;
  CharacterValue: string;
};

export enum FilePath {
  Empty = '"',
  FilePathOnPage = 'on page',
  ID = '$ID/',
  OnPage = '" on page',
  Page = 'page',
}

export type AssignmentProperties = {
  FrameColor: FrameColor;
};
export type Assignment = {
  Properties: AssignmentProperties;
  Self: string;
  Name: string;
  UserName: FilePath;
  ExportOptions: string;
  IncludeLinksWhenPackage: string;
  FilePath: FilePath;
};

export enum ActiveConditionSet {
  N = 'n',
}
export type ConditionalTextPreference = {
  ShowConditionIndicators: string;
  ActiveConditionSet: ActiveConditionSet;
};

export type BuildingBlockElement = {
  Self: string;
  BlockType: string;
  AppliedCharacterStyle: ActiveConditionSet;
  CustomText: FilePath;
  AppliedDelimiter: FilePath;
  IncludeDelimiter: string;
};
export type CrossReferenceFormat = {
  BuildingBlock: BuildingBlockElement[] | BuildingBlockElement;
  Self: string;
  Name: string;
  AppliedCharacterStyle: ActiveConditionSet;
};

export type DocumentUserProperties = {
  UserColor: FrameColor;
};
export type DocumentUser = {
  Properties: DocumentUserProperties;
  Self: string;
  UserName: string;
};

export type IndexingSortOption = {
  Self: string;
  Name: string;
  Include: string;
  Priority: string;
  HeaderType: string;
};

export type LayerProperties = {
  LayerColor: FrameColor;
};

export type Layer = {
  Properties: LayerProperties;
  Self: string;
  Name: string;
  Visible: string;
  Locked: string;
  IgnoreWrap: string;
  ShowGuides: string;
  LockGuides: string;
  UI: string;
  Expendable: string;
  Printable: string;
};

export type LinkedPageItemOption = {
  UpdateLinkWhileSaving: string;
  WarnOnUpdateOfEditedPageItem: string;
  PreserveSizeAndShape: string;
  PreserveAppearance: string;
  PreserveInteractivity: string;
  PreserveFrameContent: string;
  PreserveOthers: string;
};

export type LinkedStoryOption = {
  UpdateWhileSaving: string;
  WarnOnUpdateOfEditedStory: string;
  RemoveForcedLineBreaks: string;
  ApplyStyleMappings: string;
};

export type GridDataInformationProperties = {
  AppliedFont: FrameColor;
};

export type GridDataInformation = {
  Properties: GridDataInformationProperties;
  FontStyle: string;
  PointSize: string;
  CharacterAki: string;
  LineAki: string;
  HorizontalScale: string;
  VerticalScale: string;
  LineAlignment: string;
  GridAlignment: string;
  CharacterAlignment: string;
};
export type NamedGrid = {
  GridDataInformation: GridDataInformation;
  Self: string;
  Name: string;
};

export type NumberingList = {
  Self: string;
  Name: string;
  ContinueNumbersAcrossStories: string;
  ContinueNumbersAcrossDocuments: string;
};
export type SectionProperties = {
  PageNumberStyle: FrameColor;
};
export type Section = {
  Properties: SectionProperties;
  Self: string;
  Length: string;
  AlternateLayoutLength: string;
  AlternateLayout: string;
  Pagination: string;
  PaginationMaster: ActiveConditionSet;
  Name: string;
  ContinueNumbering: string;
  IncludeSectionPrefix: string;
  Marker: string;
  PageStart: string;
  SectionPrefix: string;
};

export type TaggedPDFPreference = {
  StructureOrder: string;
};

export type VariablePreference = {
  TextBefore: string;
  Format: string;
  TextAfter: string;
  Scope?: string;
};

export type FileNameVariablePreference = {
  TextBefore: string;
  IncludePath: string;
  IncludeExtension: string;
  TextAfter: string;
};

export type MatchParagraphStylePreference = {
  TextBefore: string;
  TextAfter: string;
  AppliedParagraphStyle: string;
  SearchStrategy: string;
  ChangeCase: string;
  DeleteEndPunctuation: string;
};
export type TextVariable = {
  Self: string;
  Name: string;
  VariableType: string;
  ChapterNumberVariablePreference?: VariablePreference;
  DateVariablePreference?: VariablePreference;
  FileNameVariablePreference?: FileNameVariablePreference;
  PageNumberVariablePreference?: VariablePreference;
  MatchParagraphStylePreference?: MatchParagraphStylePreference;
};

export type IDPkg = {
  src: string;
};

export type Document = {
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
  'idPkg:Spread': IDPkg | IDPkg[];
  Section: Section;
  DocumentUser: DocumentUser;
  CrossReferenceFormat: CrossReferenceFormat[];
  'idPkg:BackingStory': IDPkg;
  'idPkg:Story': IDPkg[];
  IndexingSortOption: IndexingSortOption[];
  ABullet: ABullet[];
  Assignment: Assignment;
  'xmlns:idPkg': string;
  DOMVersion: string;
  Self: string;
  StoryList: string;
  ZeroPoint: string;
  ActiveLayer: string;
  CMYKProfile: string;
  RGBProfile: string;
  SolidColorIntent: string;
  AfterBlendingIntent: string;
  DefaultImageIntent: string;
  RGBPolicy: string;
  CMYKPolicy: string;
  AccurateLABSpots: string;
};

export type DesignMap = {
  Document: Document;
};
