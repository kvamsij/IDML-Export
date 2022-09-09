import path from 'path';
import { DataProcessorClientInterface } from '../commons/DataProcessors/DataProcessorClientInterface';
import { GetPathsReturnType } from '../commons/DataProcessors/Resources/interfaces/DataProcessorInterface';
import { FileParserInterface } from '../commons/FileParser/FileParser.interface';
import { FileReaderInterface } from '../commons/FileReader/FileReader.interface';
import { DesignMap } from './designMap.type';
import { IDMLFolderSystemInterface } from './IDMlFolderSystem.interface';

export class IDMLFolderSystem implements IDMLFolderSystemInterface {
  private filePath: string;

  constructor(
    private rootPath: string,
    private fileReader: FileReaderInterface,
    private fileParser: FileParserInterface,
    private dataProcessor: DataProcessorClientInterface
  ) {
    const filename = 'designmap.xml';
    this.filePath = path.resolve(this.rootPath, filename);
  }

  async getPaths(): Promise<GetPathsReturnType> {
    const xmlData = await this.fileReader.read(this.filePath);
    const parsedData = await this.fileParser.parse<DesignMap>(xmlData);
    return this.dataProcessor.process(parsedData) as GetPathsReturnType;
  }
}
