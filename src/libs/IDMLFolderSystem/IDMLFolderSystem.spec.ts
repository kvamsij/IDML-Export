import { rmSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import path from 'path';
import { IDMLFolderSystem } from '.';
import { DataProcessorClient } from '../commons/DataProcessors/DataProcessorClient';
import { GetPathsReturnType } from '../commons/DataProcessors/Resources/interfaces/DataProcessorInterface';
import { FastXMLParser } from '../commons/FastXMLParser';
import { FileParser } from '../commons/FileParser/FileParser';
import { FileReader } from '../commons/FileReader/FileReader';
import { designMapData } from './designMap.mock';

const xmlParser = new FastXMLParser().getInstance();
const fileParser = new FileParser(xmlParser);
const fileReader = new FileReader();
const dataProcessor = new DataProcessorClient();
const rootPath = tmpdir();

beforeAll(() => {
  writeFileSync(path.join(rootPath, 'designmap.xml'), designMapData);
});
afterAll(() => {
  rmSync(path.join(rootPath, 'designmap.xml'));
});

describe('IDML Folder System', () => {
  describe('Initialization', () => {
    const folderSystem = new IDMLFolderSystem(rootPath, fileReader, fileParser, dataProcessor);
    it('should be able to call new() on IDMLFolderSystem class', () => {
      expect(folderSystem).toBeTruthy();
    });

    it('should be able to call getPaths() on IDMLFolderSystem class', async () => {
      const getPathsSpy = jest.spyOn(folderSystem, 'getPaths').mockImplementation();
      try {
        await folderSystem.getPaths();
      } catch (error) {
        //
      } finally {
        expect(getPathsSpy).toHaveBeenCalled();
      }
    });
  });
  describe('Errors', () => {
    it('should throw an error if file not found', async () => {
      const folderSystem = new IDMLFolderSystem('./rootPath', fileReader, fileParser, dataProcessor);
      const results = folderSystem.getPaths();
      await expect(results).rejects.toThrowError();
    });
    it('should not call fileParser if fileReader throws an error', async () => {
      const folderSystem = new IDMLFolderSystem(rootPath, fileReader, fileParser, dataProcessor);
      const fileReaderMock = jest.fn().mockImplementation(() => {
        throw new Error('file not found');
      });
      const fileParserMock = jest.fn();
      jest.spyOn(folderSystem, 'getPaths').mockImplementation(async (): Promise<GetPathsReturnType> => {
        fileReaderMock();
        fileParserMock();
        return {
          storyPaths: ['something'],
          resourcesPaths: {
            graphicPath: 'something',
            fontsPath: 'something',
            preferencesPath: 'something',
            stylesPath: 'something',
          },
          spreadPaths: ['something'],
        };
      });
      try {
        await folderSystem.getPaths();
      } catch (error) {
        //
      } finally {
        expect(fileParserMock).not.toHaveBeenCalled();
      }
    });
  });
  describe('Implementation', () => {
    const folderSystem = new IDMLFolderSystem(rootPath, fileReader, fileParser, dataProcessor);

    it('should return filePaths', async () => {
      expect.assertions(6);
      const result = folderSystem.getPaths();
      await expect(result).resolves.toHaveProperty('storyPaths');
      await expect(result).resolves.toHaveProperty('spreadPaths');
      await expect(result).resolves.toHaveProperty('resourcesPaths.graphicPath');
      await expect(result).resolves.toHaveProperty('resourcesPaths.fontsPath');
      await expect(result).resolves.toHaveProperty('resourcesPaths.preferencesPath');
      await expect(result).resolves.toHaveProperty('resourcesPaths.stylesPath');
    });
  });
});
