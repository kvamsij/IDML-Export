import path from 'path';
import { FileParserInterface } from '../commons/FileParser/FileParser.interface';
import { FileReaderInterface } from '../commons/FileReader/FileReader.interface';
import { DesignMap } from './designMap.type';
import { GetPathsReturnType, IDMLFilePaths, IDMLFolderSystemInterface } from './IDMlFolderSystem.interface';

export class IDMLFolderSystem implements IDMLFolderSystemInterface {
  private filePath: string;

  constructor(
    private rootPath: string,
    private fileReader: FileReaderInterface,
    private fileParser: FileParserInterface
  ) {
    const filename = 'designmap.xml';
    this.filePath = path.resolve(this.rootPath, filename);
  }

  async getPaths(): Promise<GetPathsReturnType> {
    const xmlData = await this.fileReader.read(this.filePath);
    const parsedData = await this.fileParser.parse<DesignMap>(xmlData);
    const paths: { [key: string]: IDMLFilePaths } = this.filterIdPkgKeys(parsedData);
    const filePaths = this.extractRequiredFilePaths(paths);
    return filePaths;
  }

  // eslint-disable-next-line class-methods-use-this
  private filterIdPkgKeys(parsedData: DesignMap): { [key: string]: IDMLFilePaths } {
    return Object.keys(parsedData.Document)
      .filter((key) => key.toLowerCase().startsWith('idpkg:'))
      .reduce(
        (cur, key) => Object.assign(cur, { [key]: parsedData.Document[key as keyof typeof parsedData.Document] }),
        {}
      );
  }

  // eslint-disable-next-line class-methods-use-this
  private extractRequiredFilePaths(paths: { [key: string]: IDMLFilePaths }): GetPathsReturnType {
    const storyPaths = this.getFullPath(paths['idPkg:Story']);
    const spreadPaths = this.getFullPath(paths['idPkg:Spread']);

    const graphicPath = this.getFullPath(paths['idPkg:Graphic'])[0];
    const fontsPath = this.getFullPath(paths['idPkg:Fonts'])[0];
    const preferencesPath = this.getFullPath(paths['idPkg:Preferences'])[0];
    const stylesPath = this.getFullPath(paths['idPkg:Styles'])[0];

    const filePaths = {
      storyPaths,
      spreadPaths,
      resourcesPaths: { graphicPath, fontsPath, preferencesPath, stylesPath },
    };

    return filePaths;
  }

  private getFullPath(filePaths: { src: string } | Array<{ src: string }>): string[] {
    if (Array.isArray(filePaths)) return filePaths.map((filePath) => path.join(this.rootPath, filePath.src));
    return Object.entries(filePaths).map(([, value]) => path.join(this.rootPath, value));
  }
}
