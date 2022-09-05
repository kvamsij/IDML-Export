export enum Name {
  ID = '$ID/',
}

export type RasterVectorBalance = {
  '#text': number;
  '@_type': string;
};

export type FlattenerPreferenceProperties = {
  RasterVectorBalance: RasterVectorBalance;
};

export type FlattenerPreference = {
  Properties: FlattenerPreferenceProperties;
  '@_LineArtAndTextResolution': string;
  '@_GradientAndMeshResolution': string;
  '@_ClipComplexRegions': string;
  '@_ConvertAllStrokesToOutlines': string;
  '@_ConvertAllTextToOutlines': string;
};

export enum PageTransitionType {
  None = 'None',
}

export type TextFramePreference = {
  '@_TextColumnFixedWidth': string;
  '@_VerticalJustification'?: string;
  '@_TextColumnMaxWidth': string;
  '@_AutoSizingType': string;
  '@_AutoSizingReferencePoint': string;
  '@_UseMinimumHeightForAutoSizing': string;
  '@_MinimumHeightForAutoSizing': string;
  '@_UseMinimumWidthForAutoSizing': string;
  '@_MinimumWidthForAutoSizing': string;
  '@_UseNoLineBreaksForAutoSizing': string;
};

export type PageColor = {
  '#text': string;
  '@_type': string;
};
export type GridDataInformationProperties = {
  AppliedFont: PageColor;
};
export type GridDataInformation = {
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
};

export type GuideProperties = {
  GuideColor: PageColor;
};
export type Guide = {
  Properties: GuideProperties;
  '@_Self': string;
  '@_OverriddenPageItemProps': string;
  '@_Orientation': string;
  '@_Location': string;
  '@_FitToPage': string;
  '@_ViewThreshold': string;
  '@_Locked': string;
  '@_ItemLayer': string;
  '@_PageIndex': string;
  '@_GuideType': string;
  '@_GuideZone': string;
};

export type MarginPreference = {
  '@_ColumnCount': string;
  '@_ColumnGutter': string;
  '@_Top': string;
  '@_Bottom': string;
  '@_Left': string;
  '@_Right': string;
  '@_ColumnDirection': string;
  '@_ColumnsPositions': string;
};

export type ListItem = {
  '@_type': string;
  '#text'?: boolean | number | string;
};
export type Descriptor = {
  ListItem: ListItem[];
  '@_type': string;
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
  '@_Self': string;
  '@_AppliedAlternateLayout': string;
  '@_LayoutRule': string;
  '@_SnapshotBlendingMode': string;
  '@_OptionalPage': string;
  '@_GeometricBounds': string;
  '@_ItemTransform': string;
  '@_Name': string;
  '@_AppliedTrapPreset': string;
  '@_OverrideList': string;
  '@_AppliedMaster': string;
  '@_MasterPageTransform': string;
  '@_TabOrder': string;
  '@_GridStartingPoint': string;
  '@_UseMasterGrid': string;
};

export type ClippingPathSettings = {
  '@_ClippingType': PageTransitionType;
  '@_InvertPath': string;
  '@_IncludeInsideEdges': string;
  '@_RestrictToFrame': string;
  '@_UseHighResolutionImage': string;
  '@_Threshold': string;
  '@_Tolerance': string;
  '@_InsetFrame': string;
  '@_AppliedPathName': Name;
  '@_Index': string;
};

export type ImageIOPreference = {
  '@_ApplyPhotoshopClippingPath': string;
  '@_AllowAutoEmbedding': string;
  '@_AlphaChannelName': Name;
};

export type Link = {
  '@_Self': string;
  '@_AssetURL': Name;
  '@_AssetID': Name;
  '@_LinkResourceURI': string;
  '@_LinkResourceFormat': string;
  '@_StoredState': string;
  '@_LinkClassID': string;
  '@_LinkClientID': string;
  '@_LinkResourceModified': string;
  '@_LinkObjectModified': string;
  '@_ShowInUI': string;
  '@_CanEmbed': string;
  '@_CanUnembed': string;
  '@_CanPackage': string;
  '@_ImportPolicy': string;
  '@_ExportPolicy': string;
  '@_LinkImportStamp': string;
  '@_LinkImportModificationTime': Date;
  '@_LinkImportTime': Date;
  '@_LinkResourceSize': string;
};

export type MetadataPacketPreferenceProperties = {
  Contents: string;
};
export type MetadataPacketPreference = {
  Properties: MetadataPacketPreferenceProperties;
};

export type GraphicBounds = {
  '@_Left': string;
  '@_Top': string;
  '@_Right': string;
  '@_Bottom': string;
};
export type ImageProperties = {
  Profile: PageColor;
  GraphicBounds: GraphicBounds;
};

export enum TextWrapSide {
  BothSides = 'BothSides',
}

export type ContourOption = {
  '@_ContourType': string;
  '@_IncludeInsideEdges': string;
  '@_ContourPathName': Name;
};

export type TextWrapPreferenceProperties = {
  TextWrapOffset: GraphicBounds;
};

export type TextWrapPreference = {
  Properties: TextWrapPreferenceProperties;
  ContourOption?: ContourOption;
  '@_Inverse': string;
  '@_ApplyToMasterPageOnly': string;
  '@_TextWrapSide': TextWrapSide;
  '@_TextWrapMode': PageTransitionType;
};
export type Image = {
  Properties: ImageProperties;
  TextWrapPreference: TextWrapPreference;
  MetadataPacketPreference: MetadataPacketPreference;
  Link: Link;
  ClippingPathSettings: ClippingPathSettings;
  ImageIOPreference: ImageIOPreference;
  '@_Self': string;
  '@_Space': string;
  '@_ActualPpi': string;
  '@_EffectivePpi': string;
  '@_ImageRenderingIntent': string;
  '@_OverriddenPageItemProps': string;
  '@_LocalDisplaySetting': string;
  '@_ImageTypeName': string;
  '@_AppliedObjectStyle': string;
  '@_ItemTransform': string;
  '@_ParentInterfaceChangeCount': string;
  '@_TargetInterfaceChangeCount': string;
  '@_LastUpdatedInterfaceChangeCount': string;
  '@_HorizontalLayoutConstraints': string;
  '@_VerticalLayoutConstraints': string;
  '@_GradientFillStart': string;
  '@_GradientFillLength': string;
  '@_GradientFillAngle': string;
  '@_GradientFillHiliteLength': string;
  '@_GradientFillHiliteAngle': string;
  '@_Visible': string;
  '@_Name': Name;
};

export type InCopyExportOption = {
  '@_IncludeGraphicProxies': string;
  '@_IncludeAllResources': string;
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
  '@_NamespacePrefix': Name;
  '@_PropertyPath': Name;
};
export type ObjectExportOptionProperties = {
  AltMetadataProperty: MetadataProperty;
  ActualMetadataProperty: MetadataProperty;
};
export type ObjectExportOption = {
  Properties: ObjectExportOptionProperties;
  '@_AltTextSourceType': TextSourceType;
  '@_ActualTextSourceType': TextSourceType;
  '@_CustomAltText': Name;
  '@_CustomActualText': Name;
  '@_ApplyTagType': ApplyTagType;
  '@_CustomImageConversion': string;
  '@_ImageConversionType': ImageConversionType;
  '@_CustomImageSizeOption': CustomImageSizeOption;
  '@_ImageExportResolution': ImageExportResolution;
  '@_GIFOptionsPalette': GIFOptionsPalette;
  '@_GIFOptionsInterlaced': string;
  '@_JPEGOptionsQuality': JPEGOptionsQuality;
  '@_JPEGOptionsFormat': JPEGOptionsFormat;
  '@_ImageAlignment': ImageAlignment;
  '@_ImageSpaceBefore': string;
  '@_ImageSpaceAfter': string;
  '@_UseImagePageBreak': string;
  '@_ImagePageBreak': ImagePageBreak;
  '@_CustomImageAlignment': string;
  '@_SpaceUnit': SpaceUnit;
  '@_CustomLayout': string;
  '@_CustomLayoutType': CustomLayoutType;
};

export type GraphicLayer = {
  '@_Self': string;
  '@_Name': string;
  '@_OriginalVisibility': string;
  '@_CurrentVisibility': string;
  '@_SeparatorLayer': string;
  '@_AdjustmentLayer': string;
  '@_FXLayer': string;
  '@_Locked': string;
  '@_HasViewState': string;
  '@_ViewState': string;
  '@_HasExportState': string;
  '@_ExportState': string;
  '@_HasPrintState': string;
  '@_PrintState': string;
  '@_Id': string;
};
export type GraphicLayerOption = {
  GraphicLayer: GraphicLayer;
  '@_UpdateLinkOption': string;
};
export type PDFAttribute = {
  '@_PageNumber': string;
  '@_PDFCrop': string;
  '@_TransparentBackground': string;
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
  '@_Self': string;
  '@_GrayVectorPolicy': string;
  '@_RGBVectorPolicy': string;
  '@_CMYKVectorPolicy': string;
  '@_OverriddenPageItemProps': string;
  '@_LocalDisplaySetting': string;
  '@_ImageTypeName': string;
  '@_AppliedObjectStyle': string;
  '@_ItemTransform': string;
  '@_ParentInterfaceChangeCount': string;
  '@_TargetInterfaceChangeCount': string;
  '@_LastUpdatedInterfaceChangeCount': string;
  '@_HorizontalLayoutConstraints': string;
  '@_VerticalLayoutConstraints': string;
  '@_Visible': string;
  '@_Name': Name;
};

export type PathPointType = {
  '@_Anchor': string;
  '@_LeftDirection': string;
  '@_RightDirection': string;
};
export type PathPointArray = {
  PathPointType: PathPointType[];
};
export type GeometryPathType = {
  PathPointArray: PathPointArray;
  '@_PathOpen': string;
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
  '@_Self': string;
  '@_ParentStory': string;
  '@_PreviousTextFrame': string;
  '@_NextTextFrame': string;
  '@_ContentType': string;
  '@_ParentInterfaceChangeCount': string;
  '@_TargetInterfaceChangeCount': string;
  '@_LastUpdatedInterfaceChangeCount': string;
  '@_OverriddenPageItemProps': string;
  '@_HorizontalLayoutConstraints': string;
  '@_VerticalLayoutConstraints': string;
  '@_GradientFillStart': string;
  '@_GradientFillLength': string;
  '@_GradientFillAngle': string;
  '@_GradientStrokeStart': string;
  '@_GradientStrokeLength': string;
  '@_GradientStrokeAngle': string;
  '@_ItemLayer': string;
  '@_Locked': string;
  '@_LocalDisplaySetting': string;
  '@_GradientFillHiliteLength': string;
  '@_GradientFillHiliteAngle': string;
  '@_GradientStrokeHiliteLength': string;
  '@_GradientStrokeHiliteAngle': string;
  '@_AppliedObjectStyle': string;
  '@_Visible': string;
  '@_Name': Name;
  '@_ItemTransform': string;
};

export type Rectangle = {
  Properties: RectangleProperties;
  TextWrapPreference: TextWrapPreference;
  InCopyExportOption: InCopyExportOption;
  ObjectExportOption: ObjectExportOption;
  Image?: Image;
  '@_Self': string;
  '@_ContentType': string;
  '@_StoryTitle': Name;
  '@_ParentInterfaceChangeCount': string;
  '@_TargetInterfaceChangeCount': string;
  '@_LastUpdatedInterfaceChangeCount': string;
  '@_OverriddenPageItemProps': string;
  '@_HorizontalLayoutConstraints': string;
  '@_VerticalLayoutConstraints': string;
  '@_GradientFillStart': string;
  '@_GradientFillLength': string;
  '@_GradientFillAngle': string;
  '@_GradientStrokeStart': string;
  '@_GradientStrokeLength': string;
  '@_GradientStrokeAngle': string;
  '@_ItemLayer': string;
  '@_Locked': string;
  '@_LocalDisplaySetting': string;
  '@_GradientFillHiliteLength': string;
  '@_GradientFillHiliteAngle': string;
  '@_GradientStrokeHiliteLength': string;
  '@_GradientStrokeHiliteAngle': string;
  '@_AppliedObjectStyle': string;
  '@_Visible': string;
  '@_Name': Name;
  '@_ItemTransform': string;
  '@_FillColor'?: string;
  '@_StrokeWeight'?: string;
  '@_MiterLimit'?: string;
  PDF?: PDF;
};

export type Spread = {
  FlattenerPreference: FlattenerPreference;
  Page: Page;
  Rectangle: Rectangle[];
  TextFrame: TextFrame[];
  '@_Self': string;
  '@_FlattenerOverride': string;
  '@_AllowPageShuffle': string;
  '@_ItemTransform': string;
  '@_ShowMasterItems': string;
  '@_PageCount': string;
  '@_BindingLocation': string;
  '@_PageTransitionType': PageTransitionType;
  '@_PageTransitionDirection': string;
  '@_PageTransitionDuration': string;
};
export type IDPkgSpread = {
  Spread: Spread;
  '@_xmlns:idPkg': string;
  '@_DOMVersion': string;
};
export type IDMLSpread = {
  'idPkg:Spread': IDPkgSpread;
};
