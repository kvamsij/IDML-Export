import { FileParser } from '@src/libs/commons/FileParser/FileParser';
import { FastXMLParser } from '@src/libs/commons/FastXMLParser/index';

const xmlParser = new FastXMLParser().getInstance();
describe('FileParser', () => {
  describe('Initialization', () => {
    const fileParser = new FileParser(xmlParser);
    it('should be able to call new() on FileParser Class', () => {
      expect(fileParser).toBeTruthy();
    });
    it('should call parse() method', () => {
      const parseSpy = jest.spyOn(fileParser, 'parse').mockImplementation();
      fileParser.parse('data');
      expect(parseSpy).toHaveBeenCalledTimes(1);
    });
    it('should accept data parameter parse() method', () => {
      const parseSpy = jest.spyOn(fileParser, 'parse').mockImplementation();
      fileParser.parse('data');
      expect(parseSpy).toHaveBeenCalledWith('data');
    });
  });
  describe('Errors check', () => {
    const fileParser = new FileParser(xmlParser);
    it('validate XML data', async () => {
      const data = `<?xml version="1.0" encoding="UTF-8"?>
      <note>
      <to>Tove</to>
      <from>Jani</from>
      <heading>Reminder</pheading>
      <body>Don't forget me this weekend!</body>
      </note>`;
      await expect(fileParser.parse(data)).rejects.toThrowError();
    });
    it('should throw an error if data is empty', async () => {
      await expect(fileParser.parse('')).rejects.toThrowError(new Error('Provided data is an empty string'));
    });
  });
  describe('Implementation', () => {
    const fileParser = new FileParser(xmlParser);
    it('should return a json data', async () => {
      const data = `<?xml version="1.0" encoding="UTF-8"?>
      <note type="reminder">
      <to>Tove</to>
      <from>Jani</from> 
      <heading>Reminder</heading>
      <body>Don't forget me this weekend!</body>
      </note>`;
      const expectedJSONData = {
        note: { to: 'Tove', from: 'Jani', heading: 'Reminder', body: "Don't forget me this weekend!" },
      };
      const result = await fileParser.parse(data);
      expect(result).toMatchObject(expectedJSONData);
    });
  });
});
