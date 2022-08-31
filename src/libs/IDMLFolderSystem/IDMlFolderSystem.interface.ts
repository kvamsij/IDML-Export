import { Document } from './designMap.type';

export type GetPathsReturnType = Partial<Document>;

export interface IDMLFolderSystemInterface {
  getPaths(): Promise<GetPathsReturnType>;
}
