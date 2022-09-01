import { FileParserInterface } from '@src/libs/commons/FileParser/FileParser.interface';
import { FileReaderInterface } from '@src/libs/commons/FileReader/FileReader.interface';
import { InMemoryDB } from '../../InMemoryDBAbstract';
import { Font, IDMLFonts } from './Fonts.type';

export class Fonts extends InMemoryDB<Font> {
  constructor(
    private fileReader: FileReaderInterface,
    private fileParser: FileParserInterface,
    private filePath: string
  ) {
    super();
    //
  }

  async load() {
    const fileData = await this.fileReader.read(this.filePath);
    const parsedData = await this.fileParser.parse<IDMLFonts>(fileData);
    const fontsList: Font[] = parsedData['idPkg:Fonts'].FontFamily.flatMap((fontFamily) => fontFamily.Font);
    fontsList.forEach((font) => this.set(font.Self, font));
  }
}
