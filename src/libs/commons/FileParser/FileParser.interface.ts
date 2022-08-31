export type ParserReturnType = {
  [key: string]: string;
};

export interface FileParserInterface {
  parse<T>(data: string): Promise<T>;
}
