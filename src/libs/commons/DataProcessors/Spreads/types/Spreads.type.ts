export enum Name {
  ID = '$ID/',
}

export type RasterVectorBalance = {
  '#text': number;
  type: string;
};

export type FlattenerPreferenceProperties = {
  RasterVectorBalance: RasterVectorBalance;
};

export type FlattenerPreference = {
  Properties: FlattenerPreferenceProperties;
  LineArtAndTextResolution: string;
  GradientAndMeshResolution: string;
  ClipComplexRegions: string;
  ConvertAllStrokesToOutlines: string;
  ConvertAllTextToOutlines: string;
};

export enum PageTransitionType {
  None = 'None',
}

export type TextFramePreference = {
  TextColumnFixedWidth: string;
  VerticalJustification?: string;
  TextColumnMaxWidth: string;
  AutoSizingType: string;
  AutoSizingReferencePoint: string;
  UseMinimumHeightForAutoSizing: string;
  MinimumHeightForAutoSizing: string;
  UseMinimumWidthForAutoSizing: string;
  MinimumWidthForAutoSizing: string;
  UseNoLineBreaksForAutoSizing: string;
};

export type PageColor = {
  '#text': string;
  type: string;
};
export type GridDataInformationProperties = {
  AppliedFont: PageColor;
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

export type GuideProperties = {
  GuideColor: PageColor;
};
export type Guide = {
  Properties: GuideProperties;
  Self: string;
  OverriddenPageItemProps: string;
  Orientation: string;
  Location: string;
  FitToPage: string;
  ViewThreshold: string;
  Locked: string;
  ItemLayer: string;
  PageIndex: string;
  GuideType: string;
  GuideZone: string;
};

export type MarginPreference = {
  ColumnCount: string;
  ColumnGutter: string;
  Top: string;
  Bottom: string;
  Left: string;
  Right: string;
  ColumnDirection: string;
  ColumnsPositions: string;
};

export type ListItem = {
  type: string;
  '#text'?: boolean | number | string;
};
export type Descriptor = {
  ListItem: ListItem[];
  type: string;
};
export type PageProperties = {
  Descriptor: Descriptor;
  PageColor: PageColor;
};
export type Page = {
  Properties: PageProperties;
  MarginPreference: MarginPreference;
  GridDataInformation: GridDataInformation;
  Guide: Guide[];
  Self: string;
  AppliedAlternateLayout: string;
  LayoutRule: string;
  SnapshotBlendingMode: string;
  OptionalPage: string;
  GeometricBounds: string;
  ItemTransform: string;
  Name: string;
  AppliedTrapPreset: string;
  OverrideList: string;
  AppliedMaster: string;
  MasterPageTransform: string;
  TabOrder: string;
  GridStartingPoint: string;
  UseMasterGrid: string;
};

export type ClippingPathSettings = {
  ClippingType: PageTransitionType;
  InvertPath: string;
  IncludeInsideEdges: string;
  RestrictToFrame: string;
  UseHighResolutionImage: string;
  Threshold: string;
  Tolerance: string;
  InsetFrame: string;
  AppliedPathName: Name;
  Index: string;
};

export type ImageIOPreference = {
  ApplyPhotoshopClippingPath: string;
  AllowAutoEmbedding: string;
  AlphaChannelName: Name;
};

export type Link = {
  Self: string;
  AssetURL: Name;
  AssetID: Name;
  LinkResourceURI: string;
  LinkResourceFormat: string;
  StoredState: string;
  LinkClassID: string;
  LinkClientID: string;
  LinkResourceModified: string;
  LinkObjectModified: string;
  ShowInUI: string;
  CanEmbed: string;
  CanUnembed: string;
  CanPackage: string;
  ImportPolicy: string;
  ExportPolicy: string;
  LinkImportStamp: string;
  LinkImportModificationTime: Date;
  LinkImportTime: Date;
  LinkResourceSize: string;
};

export type MetadataPacketPreferenceProperties = {
  Contents: string;
};
export type MetadataPacketPreference = {
  Properties: MetadataPacketPreferenceProperties;
};

export type GraphicBounds = {
  Left: string;
  Top: string;
  Right: string;
  Bottom: string;
};
export type ImageProperties = {
  Profile: PageColor;
  GraphicBounds: GraphicBounds;
};

export enum TextWrapSide {
  BothSides = 'BothSides',
}

export type ContourOption = {
  ContourType: string;
  IncludeInsideEdges: string;
  ContourPathName: Name;
};

export type TextWrapPreferenceProperties = {
  TextWrapOffset: GraphicBounds;
};

export type TextWrapPreference = {
  Properties: TextWrapPreferenceProperties;
  ContourOption?: ContourOption;
  Inverse: string;
  ApplyToMasterPageOnly: string;
  TextWrapSide: TextWrapSide;
  TextWrapMode: PageTransitionType;
};
export type Image = {
  Properties: ImageProperties;
  TextWrapPreference: TextWrapPreference;
  MetadataPacketPreference: MetadataPacketPreference;
  Link: Link;
  ClippingPathSettings: ClippingPathSettings;
  ImageIOPreference: ImageIOPreference;
  Self: string;
  Space: string;
  ActualPpi: string;
  EffectivePpi: string;
  ImageRenderingIntent: string;
  OverriddenPageItemProps: string;
  LocalDisplaySetting: string;
  ImageTypeName: string;
  AppliedObjectStyle: string;
  ItemTransform: string;
  ParentInterfaceChangeCount: string;
  TargetInterfaceChangeCount: string;
  LastUpdatedInterfaceChangeCount: string;
  HorizontalLayoutConstraints: string;
  VerticalLayoutConstraints: string;
  GradientFillStart: string;
  GradientFillLength: string;
  GradientFillAngle: string;
  GradientFillHiliteLength: string;
  GradientFillHiliteAngle: string;
  Visible: string;
  Name: Name;
};

export type InCopyExportOption = {
  IncludeGraphicProxies: string;
  IncludeAllResources: string;
};

export enum TextSourceType {
  SourceXMLStructure = 'SourceXMLStructure',
}

export enum ApplyTagType {
  TagFromStructure = 'TagFromStructure',
}

export enum CustomImageSizeOption {
  SizeRelativeToPageWidth = 'SizeRelativeToPageWidth',
}

export enum CustomLayoutType {
  AlignmentAndSpacing = 'AlignmentAndSpacing',
}

export enum GIFOptionsPalette {
  AdaptivePalette = 'AdaptivePalette',
}

export enum ImageAlignment {
  AlignLeft = 'AlignLeft',
}

export enum ImageConversionType {
  JPEG = 'JPEG',
}

export enum ImageExportResolution {
  Ppi300 = 'Ppi300',
}

export enum ImagePageBreak {
  PageBreakBefore = 'PageBreakBefore',
}

export enum JPEGOptionsFormat {
  BaselineEncoding = 'BaselineEncoding',
}

export enum JPEGOptionsQuality {
  High = 'High',
}

export enum SpaceUnit {
  CSSPixel = 'CssPixel',
}

export type MetadataProperty = {
  NamespacePrefix: Name;
  PropertyPath: Name;
};
export type ObjectExportOptionProperties = {
  AltMetadataProperty: MetadataProperty;
  ActualMetadataProperty: MetadataProperty;
};
export type ObjectExportOption = {
  Properties: ObjectExportOptionProperties;
  AltTextSourceType: TextSourceType;
  ActualTextSourceType: TextSourceType;
  CustomAltText: Name;
  CustomActualText: Name;
  ApplyTagType: ApplyTagType;
  CustomImageConversion: string;
  ImageConversionType: ImageConversionType;
  CustomImageSizeOption: CustomImageSizeOption;
  ImageExportResolution: ImageExportResolution;
  GIFOptionsPalette: GIFOptionsPalette;
  GIFOptionsInterlaced: string;
  JPEGOptionsQuality: JPEGOptionsQuality;
  JPEGOptionsFormat: JPEGOptionsFormat;
  ImageAlignment: ImageAlignment;
  ImageSpaceBefore: string;
  ImageSpaceAfter: string;
  UseImagePageBreak: string;
  ImagePageBreak: ImagePageBreak;
  CustomImageAlignment: string;
  SpaceUnit: SpaceUnit;
  CustomLayout: string;
  CustomLayoutType: CustomLayoutType;
};

export type GraphicLayer = {
  Self: string;
  Name: string;
  OriginalVisibility: string;
  CurrentVisibility: string;
  SeparatorLayer: string;
  AdjustmentLayer: string;
  FXLayer: string;
  Locked: string;
  HasViewState: string;
  ViewState: string;
  HasExportState: string;
  ExportState: string;
  HasPrintState: string;
  PrintState: string;
  Id: string;
};
export type GraphicLayerOption = {
  GraphicLayer: GraphicLayer;
  UpdateLinkOption: string;
};
export type PDFAttribute = {
  PageNumber: string;
  PDFCrop: string;
  TransparentBackground: string;
};

export type PDFProperties = {
  GraphicBounds: GraphicBounds;
};
export type PDF = {
  Properties: PDFProperties;
  TextWrapPreference: TextWrapPreference;
  PDFAttribute: PDFAttribute;
  MetadataPacketPreference: MetadataPacketPreference;
  Link: Link;
  ClippingPathSettings: ClippingPathSettings;
  GraphicLayerOption: GraphicLayerOption;
  Self: string;
  GrayVectorPolicy: string;
  RGBVectorPolicy: string;
  CMYKVectorPolicy: string;
  OverriddenPageItemProps: string;
  LocalDisplaySetting: string;
  ImageTypeName: string;
  AppliedObjectStyle: string;
  ItemTransform: string;
  ParentInterfaceChangeCount: string;
  TargetInterfaceChangeCount: string;
  LastUpdatedInterfaceChangeCount: string;
  HorizontalLayoutConstraints: string;
  VerticalLayoutConstraints: string;
  Visible: string;
  Name: Name;
};

export type PathPointType = {
  Anchor: string;
  LeftDirection: string;
  RightDirection: string;
};
export type PathPointArray = {
  PathPointType: PathPointType[];
};
export type GeometryPathType = {
  PathPointArray: PathPointArray;
  PathOpen: string;
};
export type PathGeometry = {
  GeometryPathType: GeometryPathType;
};
export type RectangleProperties = {
  PathGeometry: PathGeometry;
};
export type TextFrame = {
  Properties: RectangleProperties;
  TextFramePreference: TextFramePreference;
  TextWrapPreference: TextWrapPreference;
  ObjectExportOption: ObjectExportOption;
  Self: string;
  ParentStory: string;
  PreviousTextFrame: string;
  NextTextFrame: string;
  ContentType: string;
  ParentInterfaceChangeCount: string;
  TargetInterfaceChangeCount: string;
  LastUpdatedInterfaceChangeCount: string;
  OverriddenPageItemProps: string;
  HorizontalLayoutConstraints: string;
  VerticalLayoutConstraints: string;
  GradientFillStart: string;
  GradientFillLength: string;
  GradientFillAngle: string;
  GradientStrokeStart: string;
  GradientStrokeLength: string;
  GradientStrokeAngle: string;
  ItemLayer: string;
  Locked: string;
  LocalDisplaySetting: string;
  GradientFillHiliteLength: string;
  GradientFillHiliteAngle: string;
  GradientStrokeHiliteLength: string;
  GradientStrokeHiliteAngle: string;
  AppliedObjectStyle: string;
  Visible: string;
  Name: Name;
  ItemTransform: string;
};

export type Rectangle = {
  Properties: RectangleProperties;
  TextWrapPreference: TextWrapPreference;
  InCopyExportOption: InCopyExportOption;
  ObjectExportOption: ObjectExportOption;
  Image?: Image;
  Self: string;
  ContentType: string;
  StoryTitle: Name;
  ParentInterfaceChangeCount: string;
  TargetInterfaceChangeCount: string;
  LastUpdatedInterfaceChangeCount: string;
  OverriddenPageItemProps: string;
  HorizontalLayoutConstraints: string;
  VerticalLayoutConstraints: string;
  GradientFillStart: string;
  GradientFillLength: string;
  GradientFillAngle: string;
  GradientStrokeStart: string;
  GradientStrokeLength: string;
  GradientStrokeAngle: string;
  ItemLayer: string;
  Locked: string;
  LocalDisplaySetting: string;
  GradientFillHiliteLength: string;
  GradientFillHiliteAngle: string;
  GradientStrokeHiliteLength: string;
  GradientStrokeHiliteAngle: string;
  AppliedObjectStyle: string;
  Visible: string;
  Name: Name;
  ItemTransform: string;
  FillColor?: string;
  StrokeWeight?: string;
  MiterLimit?: string;
  PDF?: PDF;
};

export type Spread = {
  FlattenerPreference: FlattenerPreference;
  Page: Page;
  Rectangle: Rectangle[];
  TextFrame: TextFrame[];
  Self: string;
  FlattenerOverride: string;
  AllowPageShuffle: string;
  ItemTransform: string;
  ShowMasterItems: string;
  PageCount: string;
  BindingLocation: string;
  PageTransitionType: PageTransitionType;
  PageTransitionDirection: string;
  PageTransitionDuration: string;
};
export type IDPkgSpread = {
  Spread: Spread;
  'xmlns:idPkg': string;
  DOMVersion: string;
};
export type IDMLSpread = {
  'idPkg:Spread': IDPkgSpread;
};
