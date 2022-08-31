import { XMLParser } from 'fast-xml-parser';

export class FastXMLParser {
  private xmlParser: XMLParser;

  constructor() {
    const options = {
      ignoreAttributes: false,
      attributeNamePrefix: '',
      unpairedTags: ['br'],
      processEntities: false,
      stopNodes: ['*xml'],
      ignorePiTags: true,
    };
    this.xmlParser = new XMLParser(options);
  }

  getInstance(): XMLParser {
    return this.xmlParser;
  }
}
