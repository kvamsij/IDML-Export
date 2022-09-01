import { FileParser } from '@src/libs/commons/FileParser/FileParser';
import { FileReaderInterface } from '@src/libs/commons/FileReader/FileReader.interface';
import {
  CharacterStyle,
  IDMLStyles,
  IDPkgStyles,
  ParagraphStyle,
} from '@src/libs/InMemoryDB/Resources/Styles/Styles.type';
import { InMemoryDB } from '../../InMemoryDBAbstract';

export class Styles extends InMemoryDB<CharacterStyle | ParagraphStyle> {
  constructor(private fileReader: FileReaderInterface, private fileParser: FileParser, private filePath: string) {
    super();
  }

  async load() {
    const fileData = await this.fileReader.read(this.filePath);
    const parsedData = await this.fileParser.parse<IDMLStyles>(fileData);
    const { RootCharacterStyleGroup, RootParagraphStyleGroup } = parsedData['idPkg:Styles'];
    [...RootCharacterStyleGroup.CharacterStyle, ...RootParagraphStyleGroup.ParagraphStyle].forEach(
      (style: CharacterStyle | ParagraphStyle) => this.set(style.Self, style)
    );
  }
}
