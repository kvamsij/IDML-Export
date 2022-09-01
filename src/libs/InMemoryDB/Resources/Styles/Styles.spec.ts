import { FastXMLParser } from '@src/libs/commons/FastXMLParser';
import { FileParser } from '@src/libs/commons/FileParser/FileParser';
import { FileReader } from '@src/libs/commons/FileReader/FileReader';
import { mkdir, rm, writeFile } from 'fs/promises';
import { tmpdir } from 'os';
import path from 'path';
import { Styles } from './Styles';
import { StylesMockData } from './Styles.data.mock';
import { CharacterStyle, IDMLStyles, ParagraphStyle } from './Styles.type';

const xmlParser = new FastXMLParser().getInstance();
const fileReader = new FileReader();
const fileParser = new FileParser(xmlParser);
const rootPath = tmpdir();
const filePath = path.join(rootPath, 'Resource/Styles.xml');

beforeAll(async () => {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, StylesMockData);
});

afterAll(async () => {
  await rm(path.dirname(filePath), { recursive: true });
});

describe('Styles', () => {
  describe('Initialization', () => {
    it('should be able to call new() on Styles Class', () => {
      const styles = new Styles(fileReader, fileParser, filePath);
      expect(styles).toBeTruthy();
    });

    it('should be able an InstanceOf Map', () => {
      const styles = new Styles(fileReader, fileParser, filePath);
      expect(styles).toBeInstanceOf(Map);
    });
    it('should be able to call load() on Styles Class', () => {
      const styles = new Styles(fileReader, fileParser, filePath);
      const loadMethodSpy = jest.spyOn(styles, 'load');
      styles.load();
      expect(loadMethodSpy).toBeCalledTimes(1);
    });

    it('should call set() on calling load()', async () => {
      const styles = new Styles(fileReader, fileParser, filePath);
      const setMethodSpy = jest.spyOn(styles, 'set');
      await styles.load();
      expect(setMethodSpy).toBeCalled();
    });
  });
  describe('Errors', () => {
    it('should throw an error if filePath is an empty string', async () => {
      const styles = new Styles(fileReader, fileParser, '');
      await expect(styles.load()).rejects.toThrowError();
    });

    it('should not call set() if filePath is an empty string', async () => {
      const styles = new Styles(fileReader, fileParser, '');
      const setMethodSpy = jest.spyOn(styles, 'set');
      try {
        await styles.load();
      } catch (error) {
        //
      } finally {
        expect(setMethodSpy).not.toHaveBeenCalled();
      }
    });

    it('should throw an error if file not found', async () => {
      const styles = new Styles(fileReader, fileParser, './filePath');
      await expect(styles.load()).rejects.toThrowError();
    });
    it('should not call set() if file not found', async () => {
      const styles = new Styles(fileReader, fileParser, './filePath');
      const setMethodSpy = jest.spyOn(styles, 'set');
      try {
        await styles.load();
      } catch (error) {
        //
      } finally {
        expect(setMethodSpy).not.toHaveBeenCalled();
      }
    });
  });
  describe('Implementation', () => {
    let mockedStylesList: Array<CharacterStyle | ParagraphStyle>;

    beforeAll(async () => {
      const parsedData = await fileParser.parse<IDMLStyles>(StylesMockData);
      const { RootCharacterStyleGroup, RootParagraphStyleGroup } = parsedData['idPkg:Styles'];
      mockedStylesList = [...RootCharacterStyleGroup.CharacterStyle, ...RootParagraphStyleGroup.ParagraphStyle];
    });
    it(`should have size equal to  mocked data styles length`, async () => {
      const styles = new Styles(fileReader, fileParser, filePath);
      await styles.load();
      expect(styles.size).toStrictEqual(mockedStylesList.length);
    });

    it(`should match value and mockData object`, async () => {
      const mockedDataKeys = mockedStylesList.map((style: CharacterStyle | ParagraphStyle) => style.Self);
      const styles = new Styles(fileReader, fileParser, filePath);
      await styles.load();
      expect.assertions(mockedDataKeys.length);
      mockedDataKeys.forEach((elementKey) => {
        expect(styles.has(elementKey)).toBeTruthy();
      });
    });
  });
});
