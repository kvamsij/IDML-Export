export interface FileReaderInterface {
  read(filePath: string): Promise<string>;
}
