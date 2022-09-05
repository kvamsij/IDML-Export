export type InCopyExportOption = {
  IncludeGraphicProxies: string;
  IncludeAllResources: string;
};

export type CharacterStyleRange = {
  Content: string;
  AppliedCharacterStyle: string;
};
export type ParagraphStyleRange = {
  CharacterStyleRange: CharacterStyleRange;
  AppliedParagraphStyle: string;
  Hyphenation: string;
  DesiredWordSpacing: string;
  MaximumWordSpacing: string;
  MinimumWordSpacing: string;
  MaximumLetterSpacing: string;
  DropcapDetail: string;
  TreatIdeographicSpaceAsSpace: string;
};

export type StoryPreference = {
  OpticalMarginAlignment: string;
  OpticalMarginSize: string;
  FrameType: string;
  StoryOrientation: string;
  StoryDirection: string;
};
export type Story = {
  StoryPreference: StoryPreference;
  InCopyExportOption: InCopyExportOption;
  ParagraphStyleRange: ParagraphStyleRange;
  Self: string;
  AppliedTOCStyle: string;
  TrackChanges: string;
  StoryTitle: string;
  AppliedNamedGrid: string;
};
export type IDPkgStory = {
  Story: Story;
};

export type IDMLStory = {
  'idPkg:Story': IDPkgStory;
};
