// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-useless-constructor */

import { FileParserInterface } from '@src/libs/commons/FileParser/FileParser.interface';
import { FileReaderInterface } from '@src/libs/commons/FileReader/FileReader.interface';
import { InMemoryDB } from '../../InMemoryDBAbstract';
import { ResourceGraphic, Color } from './Graphic.type';

export class Graphics extends InMemoryDB<Color> {
  constructor(
    private fileReader: FileReaderInterface,
    private fileParser: FileParserInterface,
    private filePath: string
  ) {
    //
    super();
  }

  async load() {
    const fileData = await this.fileReader.read(this.filePath);
    const parsedData = await this.fileParser.parse<ResourceGraphic>(fileData);
    const colors = parsedData['idPkg:Graphic'].Color;
    colors.forEach((color) => this.set(color.Self, color));
  }
}
