import { readFileSync } from 'fs';
import { FileReaderInterface } from '@src/libs/commons/FileReader/FileReader.interface';

export class FileReader implements FileReaderInterface {
  // eslint-disable-next-line class-methods-use-this
  async read(filePath: string): Promise<string> {
    return readFileSync(filePath, { encoding: 'utf-8' });
  }
}
