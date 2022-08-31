import path from 'path';
import { FileParserInterface } from '../commons/FileParser/FileParser.interface';
import { FileReaderInterface } from '../commons/FileReader/FileReader.interface';
import { DesignMap } from './designMap.type';
import { GetPathsReturnType, IDMLFolderSystemInterface } from './IDMlFolderSystem.interface';

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
    return Object.keys(parsedData.Document)
      .filter((key) => key.toLowerCase().startsWith('idpkg:'))
      .reduce(
        (cur, key) => Object.assign(cur, { [key]: parsedData.Document[key as keyof typeof parsedData.Document] }),
        {}
      );
  }
}
