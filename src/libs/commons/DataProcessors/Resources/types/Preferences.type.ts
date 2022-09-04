export type ViewPreference = {
  PointsPerInch: string;
  HorizontalCustomPoints: string;
  VerticalCustomPoints: string;
  StrokeMeasurementUnits: string;
  GuideSnaptoZone: string;
  CursorKeyIncrement: string;
  HorizontalMeasurementUnits: string;
  VerticalMeasurementUnits: string;
  RulerOrigin: string;
  ShowRulers: string;
  ShowFrameEdges: string;
  LineMeasurementUnits: string;
  TypographicMeasurementUnits: string;
  TextSizeMeasurementUnits: string;
  PrintDialogMeasurementUnits: string;
  ShowNotes: string;
};

export enum Type {
  Enumeration = 'enumeration',
  File = 'file',
  Object = 'object',
  String = 'string',
}
export type BaselineFrameGridColor = {
  '#text': string;
  type: Type;
};
export type DocumentPreferenceProperties = {
  ColumnGuideColor: BaselineFrameGridColor;
  MarginGuideColor: BaselineFrameGridColor;
};
export type MarginPreference = {
  ColumnCount: string;
  ColumnGutter: string;
  Top: string;
  Bottom: string;
  Left: string;
  Right: string;
  ColumnDirection: string;
};
export type DocumentPreference = {
  Properties: DocumentPreferenceProperties;
  PageHeight: string;
  PageWidth: string;
  CreatePrimaryTextFrame: string;
  PagesPerDocument: string;
  FacingPages: string;
  DocumentBleedTopOffset: string;
  DocumentBleedBottomOffset: string;
  DocumentBleedInsideOrLeftOffset: string;
  DocumentBleedOutsideOrRightOffset: string;
  DocumentBleedUniformSize: string;
  SlugTopOffset: string;
  SlugBottomOffset: string;
  SlugInsideOrLeftOffset: string;
  SlugRightOrOutsideOffset: string;
  DocumentSlugUniformSize: string;
  PreserveLayoutWhenShuffling: string;
  AllowPageShuffle: string;
  OverprintBlack: string;
  ColumnGuideLocked: string;
  Intent: string;
  PageBinding: string;
  ColumnDirection: string;
  MasterTextFrame: string;
  SnippetImportUsesOriginalLocation: string;
};

export type IDPkgPreferences = {
  DocumentPreference: DocumentPreference;
  ViewPreference: ViewPreference;
  MarginPreference: MarginPreference;
};
export type IDMLPreferences = {
  'idPkg:Preferences': IDPkgPreferences;
};
