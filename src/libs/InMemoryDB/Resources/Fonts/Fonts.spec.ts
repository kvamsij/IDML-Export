import { FastXMLParser } from '@src/libs/commons/FastXMLParser';
import { FileParser } from '@src/libs/commons/FileParser/FileParser';
import { FileReader } from '@src/libs/commons/FileReader/FileReader';
import { mkdir, rm, writeFile } from 'fs/promises';
import { tmpdir } from 'os';
import path from 'path';
import { Fonts } from './Fonts';
import { FontsMockData } from './Fonts.data.mock';
import { IDMLFonts } from './Fonts.type';

const xmlParser = new FastXMLParser().getInstance();
const fileReader = new FileReader();
const fileParser = new FileParser(xmlParser);
const rootPath = tmpdir();
const filePath = path.join(rootPath, 'Resource/Fonts.xml');

beforeAll(async () => {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, FontsMockData);
});

afterAll(async () => {
  await rm(path.dirname(filePath), { recursive: true });
});

describe('Fonts', () => {
  describe('Initialization', () => {
    it('should be able to call new() on Fonts class', () => {
      const fonts = new Fonts(fileReader, fileParser, filePath);
      expect(fonts).toBeTruthy();
    });
    it('should be InstanceOf a Map', () => {
      const fonts = new Fonts(fileReader, fileParser, filePath);
      expect(fonts).toBeInstanceOf(Map);
    });
    it('should be able to call load()', async () => {
      const fonts = new Fonts(fileReader, fileParser, filePath);
      const loadSpy = jest.spyOn(fonts, 'load');
      await fonts.load();
      expect(loadSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('Errors', () => {
    it('should throw an error if file not found', async () => {
      const fonts = new Fonts(fileReader, fileParser, 'filePath');
      await expect(fonts.load()).rejects.toThrowError();
    });

    it('set() should not be called if file not found', async () => {
      const fonts = new Fonts(fileReader, fileParser, 'filePath');
      const setMethodSpy = jest.spyOn(fonts, 'set');
      try {
        await fonts.load();
      } catch (error) {
        //
      } finally {
        expect(setMethodSpy).not.toHaveBeenCalled();
      }
    });
    it('should throw an error if filePath is empty string', async () => {
      const fonts = new Fonts(fileReader, fileParser, '');
      await expect(fonts.load()).rejects.toThrowError();
    });
    it('set() should not be called if filePath is empty string', async () => {
      const fonts = new Fonts(fileReader, fileParser, '');
      const setMethodSpy = jest.spyOn(fonts, 'set');
      try {
        await fonts.load();
      } catch (error) {
        //
      } finally {
        expect(setMethodSpy).not.toHaveBeenCalled();
      }
    });
  });

  describe('Implementation', () => {
    let fontsList: string[];
    beforeAll(async () => {
      const parsedData = await fileParser.parse<IDMLFonts>(FontsMockData);
      fontsList = parsedData['idPkg:Fonts'].FontFamily.flatMap((fontFamily) => fontFamily.Font).map(
        (font) => font.Self
      );
    });
    it('should be strictly equal values (fonts.size, mockData.length)', async () => {
      const fonts = new Fonts(fileReader, fileParser, filePath);
      await fonts.load();
      expect(fonts.size).toStrictEqual(fontsList.length);
    });
    it('should contain all the keys from mockData', async () => {
      const fonts = new Fonts(fileReader, fileParser, filePath);
      await fonts.load();
      expect.assertions(fontsList.length);
      fontsList.forEach((fontName) => {
        expect(fonts.has(fontName)).toBeTruthy();
      });
    });
  });
});
