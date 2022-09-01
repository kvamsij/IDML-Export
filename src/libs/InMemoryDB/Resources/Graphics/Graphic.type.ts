export type Color = {
  Self: string;
  Model: string;
  Space: string;
  ColorValue: string;
  ColorOverride: string;
  AlternateSpace: string;
  AlternateColorValue: string;
  Name: string;
  ColorEditable: string;
  ColorRemovable: string;
  Visible: string;
  SwatchCreatorID: string;
};

export type IDPkgGraphic = {
  Color: Color[];
};

export type ResourceGraphic = {
  'idPkg:Graphic': IDPkgGraphic;
};
