export type IDMLFilePaths = {
  src: string;
};

export type GetPathsReturnType = {
  resourcesPaths: {
    [key: string]: IDMLFilePaths;
  };
  storyPaths: Array<IDMLFilePaths>;
  spreadPaths: Array<IDMLFilePaths>;
};

export interface IDMLFolderSystemInterface {
  getPaths(): Promise<GetPathsReturnType>;
}
