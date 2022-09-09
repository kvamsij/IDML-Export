import { GetPathsReturnType } from '../commons/DataProcessors/Resources/interfaces/DataProcessorInterface';

export interface IDMLFolderSystemInterface {
  getPaths(): Promise<GetPathsReturnType>;
}
