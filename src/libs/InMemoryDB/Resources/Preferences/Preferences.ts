import { FileParserInterface } from '@src/libs/commons/FileParser/FileParser.interface';
import { FileReaderInterface } from '@src/libs/commons/FileReader/FileReader.interface';
import { InMemoryDB } from '@src/libs/InMemoryDB/InMemoryDBAbstract';
import { DocumentPreference, IDMLPreferences } from '@src/libs/InMemoryDB/Resources/Preferences/Preferences.type';

export class Preferences extends InMemoryDB<DocumentPreference> {
  constructor(
    private fileReader: FileReaderInterface,
    private fileParser: FileParserInterface,
    private filePath: string
  ) {
    super();
  }

  async load() {
    const fileData = await this.fileReader.read(this.filePath);
    const parsedData = await this.fileParser.parse<IDMLPreferences>(fileData);
    const documentPreferences = parsedData['idPkg:Preferences'].DocumentPreference;
    this.set('DocumentPreference', documentPreferences);
  }
}
