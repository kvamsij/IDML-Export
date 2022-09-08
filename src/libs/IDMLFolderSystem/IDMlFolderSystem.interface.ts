export type IDMLFilePaths = {
  src: string;
};

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

export interface IDMLFolderSystemInterface {
  getPaths(): Promise<GetPathsReturnType>;
}
