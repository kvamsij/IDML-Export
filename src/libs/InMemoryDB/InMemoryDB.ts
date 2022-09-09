import { MapDataType } from '@src/libs/commons/DataLoaders/DataLoaderClientInterface';
import { XMLParser } from 'fast-xml-parser';
import path from 'path';
import { DataLoaderClient } from '../commons/DataLoaders/DataLoaderClient';
import { DataProcessorClient } from '../commons/DataProcessors/DataProcessorClient';
import { Font } from '../commons/DataProcessors/Resources/types/Fonts.type';
import { Color } from '../commons/DataProcessors/Resources/types/Graphic.type';
import { DocumentPreference } from '../commons/DataProcessors/Resources/types/Preferences.type';
import { CharacterStyle, ParagraphStyle } from '../commons/DataProcessors/Resources/types/Styles.type';
import { Spread } from '../commons/DataProcessors/Spreads/types/Spreads.type';
import { Story } from '../commons/DataProcessors/Stories/types/Story.type';
import { FastXMLParser } from '../commons/FastXMLParser';
import { FileParser } from '../commons/FileParser/FileParser';
import { FileReader } from '../commons/FileReader/FileReader';
import { DataStore } from '../DataStore/DataStore';
import { FileOperations } from '../FileOperator/FileOperatorInterface';
import { IDMLFolderSystem } from '../IDMLFolderSystem';

export class InMemoryDB {
  private xmlParser: XMLParser;

  private fileReader: FileReader;

  private fileParser: FileParser;

  private dataProcessor: DataProcessorClient;

  private dataLoader: DataLoaderClient;

  private folderSystem: IDMLFolderSystem;

  private fileOperations: FileOperations;

  constructor(private rootPath: string) {
    this.xmlParser = new FastXMLParser().getInstance();
    this.fileReader = new FileReader();
    this.fileParser = new FileParser(this.xmlParser);
    this.dataProcessor = new DataProcessorClient();
    this.dataLoader = new DataLoaderClient();

    this.fileOperations = {
      fileReader: this.fileReader,
      fileParser: this.fileParser,
      dataProcessor: this.dataProcessor,
      dataLoader: this.dataLoader,
    };

    this.folderSystem = new IDMLFolderSystem(this.rootPath, this.fileReader, this.fileParser, this.dataProcessor);
  }

  async getDataStores() {
    const filePaths = await this.folderSystem.getPaths();

    const stories = (await this.createDataStore(filePaths.storyPaths)) as Map<string, Story>;
    const spreads = (await this.createDataStore(filePaths.spreadPaths)) as Map<string, Spread>;
    const colors = (await this.createDataStore([filePaths.resourcesPaths.graphicPath])) as Map<string, Color>;
    const fonts = (await this.createDataStore([filePaths.resourcesPaths.fontsPath])) as Map<string, Font>;
    const preferences = (await this.createDataStore([filePaths.resourcesPaths.preferencesPath])) as Map<
      string,
      DocumentPreference
    >;
    const styles = (await this.createDataStore([filePaths.resourcesPaths.stylesPath])) as Map<
      string,
      CharacterStyle | ParagraphStyle
    >;

    return {
      stories,
      spreads,
      resources: {
        colors,
        fonts,
        preferences,
        styles,
      },
    };
  }

  private createDataStore(filePaths: string[]) {
    const fullPaths = filePaths.map((filePath) => path.join(this.rootPath, filePath));
    return new DataStore(this.fileOperations, fullPaths).create();
  }
}
