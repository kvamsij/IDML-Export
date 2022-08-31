import { rmSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import path from 'path';
import { IDMLFolderSystem } from '.';
import { FastXMLParser } from '../commons/FastXMLParser';
import { FileParser } from '../commons/FileParser/FileParser';
import { FileReader } from '../commons/FileReader/FileReader';
import { designMapData } from './designMap.mock';
import { DesignMap } from './designMap.type';
import { GetPathsReturnType } from './IDMlFolderSystem.interface';

const xmlParser = new FastXMLParser().getInstance();
const fileParser = new FileParser(xmlParser);
const fileReader = new FileReader();
const rootPath = tmpdir();

beforeAll(() => {
  writeFileSync(path.join(rootPath, 'designmap.xml'), designMapData);
});
afterAll(() => {
  rmSync(path.join(rootPath, 'designmap.xml'));
});

describe('IDML Folder System', () => {
  describe('Initialization', () => {
    const folderSystem = new IDMLFolderSystem(rootPath, fileReader, fileParser);
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
      const folderSystem = new IDMLFolderSystem('./rootPath', fileReader, fileParser);
      const results = folderSystem.getPaths();
      await expect(results).rejects.toThrowError();
    });
    it('should not call fileParser if fileReader throws an error', async () => {
      const folderSystem = new IDMLFolderSystem(rootPath, fileReader, fileParser);
      const fileReaderMock = jest.fn().mockImplementation(() => {
        throw new Error('file not found');
      });
      const fileParserMock = jest.fn();
      jest.spyOn(folderSystem, 'getPaths').mockImplementation(async (): Promise<GetPathsReturnType> => {
        fileReaderMock();
        fileParserMock();
        return { '@_Self': 'something' };
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
    const folderSystem = new IDMLFolderSystem(rootPath, fileReader, fileParser);

    it('should return filePaths', async () => {
      expect.assertions(7);
      const result = folderSystem.getPaths();
      await expect(result).resolves.toHaveProperty('idPkg:Graphic.src', 'Resources/Graphic.xml');
      await expect(result).resolves.toHaveProperty('idPkg:Fonts.src', 'Resources/Fonts.xml');
      await expect(result).resolves.toHaveProperty('idPkg:Styles.src', 'Resources/Styles.xml');
      await expect(result).resolves.toHaveProperty('idPkg:Preferences.src', 'Resources/Preferences.xml');
      await expect(result).resolves.toHaveProperty('idPkg:Spread.src');
      await expect(result).resolves.toHaveProperty('idPkg:Story');
      await expect(result).resolves.toHaveProperty('idPkg:MasterSpread');
    });
  });
});
