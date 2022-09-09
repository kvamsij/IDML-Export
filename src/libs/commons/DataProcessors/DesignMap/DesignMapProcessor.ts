import { AbstractDataProcessor } from '../AbstractorDataProcessor';
import {
  GetPathsReturnType,
  ProcessorDataType,
  ProcessorReturnType,
} from '../Resources/interfaces/DataProcessorInterface';
import { Document, IDPkg } from './designMap.type';

export type FilteredPathsType = {
  'idPkg:Graphic': IDPkg;
  'idPkg:Fonts': IDPkg;
  'idPkg:Styles': IDPkg;
  'idPkg:Preferences': IDPkg;
  'idPkg:Story': IDPkg | IDPkg[];
  'idPkg:Spread': IDPkg | IDPkg[];
};
export class DesignMapProcessor extends AbstractDataProcessor {
  public process(data: ProcessorDataType): ProcessorReturnType {
    if ('Document' in data) {
      const paths = this.filterRequiredFilePaths(data.Document);
      const filePaths = this.getRequiredFilePaths(paths);
      return filePaths;
    }
    return super.process(data);
  }

  private getRequiredFilePaths(paths: FilteredPathsType): GetPathsReturnType {
    const storyPaths = this.toArray(paths['idPkg:Story']);
    const spreadPaths = this.toArray(paths['idPkg:Spread']);

    const graphicPath = paths['idPkg:Graphic'].src;
    const fontsPath = paths['idPkg:Fonts'].src;
    const preferencesPath = paths['idPkg:Preferences'].src;
    const stylesPath = paths['idPkg:Styles'].src;

    const filePaths = {
      storyPaths,
      spreadPaths,
      resourcesPaths: { graphicPath, fontsPath, preferencesPath, stylesPath },
    };
    return filePaths;
  }

  // eslint-disable-next-line class-methods-use-this
  private filterRequiredFilePaths(data: Partial<Document>): FilteredPathsType {
    const requiredValues = [
      'idPkg:Graphic',
      'idPkg:Fonts',
      'idPkg:Styles',
      'idPkg:Preferences',
      'idPkg:Story',
      'idPkg:Spread',
    ];
    const filteredValues = Object.entries(data).filter(
      ([key]) => key.toLowerCase().startsWith('idpkg:') && requiredValues.includes(key)
    );
    return Object.fromEntries(filteredValues) as FilteredPathsType;
  }

  // eslint-disable-next-line class-methods-use-this
  private toArray(filePaths: IDPkg | Array<IDPkg>): string[] {
    if (!Array.isArray(filePaths)) return [filePaths.src];
    return filePaths.map(({ src }) => src);
  }
}
