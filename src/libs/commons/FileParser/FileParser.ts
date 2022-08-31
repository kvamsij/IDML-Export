import { XMLParser } from 'fast-xml-parser';
import { FileParserInterface } from './FileParser.interface';

export class FileParser implements FileParserInterface {
  constructor(private parser: XMLParser) {}

  async parse<T>(_data: string): Promise<T> {
    if (_data !== '') return this.parser.parse(_data, true);
    throw new Error('Provided data is an empty string');
  }
}
