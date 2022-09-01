export enum Name {
  CourierTT = 'Courier (TT)',
  Helvetica = 'Helvetica',
  JCBEuro = 'JCB Euro',
  KozukaMinchoPro = 'Kozuka Mincho Pro',
  MinionPro = 'Minion Pro',
  MyriadPro = 'Myriad Pro',
}
export enum FontType {
  OpenTypeCFF = 'OpenTypeCFF',
  OpenTypeCID = 'OpenTypeCID',
  TrueType = 'TrueType',
  Type1 = 'Type1',
}
export enum PlatformName {
  ID = '$ID/',
}

export enum Status {
  Installed = 'Installed',
  NotAvailable = 'NotAvailable',
  Substituted = 'Substituted',
}

export type AppliedFont = {
  '#text': Name;
  type: string;
};

export type Properties = {
  AppliedFont: AppliedFont;
};

export type Font = {
  Self: string;
  FontFamily: Name;
  Name: string;
  PostScriptName: string;
  Status: Status;
  FontStyleName: string;
  FontType: FontType;
  WritingScript: string;
  FullName: string;
  FullNameNative: string;
  FontStyleNameNative: string;
  PlatformName: PlatformName;
  Version: string;
};

export type FontFamily = {
  Font: Font[];
  Self: string;
  Name: Name;
};

export type IDPkgFonts = {
  FontFamily: FontFamily[];
};
export type IDMLFonts = {
  'idPkg:Fonts': IDPkgFonts;
};
