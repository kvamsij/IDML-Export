import { FastXMLParser } from '@src/libs/commons/FastXMLParser';
import { FileParser } from '@src/libs/commons/FileParser/FileParser';
import { FileReader } from '@src/libs/commons/FileReader/FileReader';
import { mkdir, rm, writeFile } from 'fs/promises';
import { tmpdir } from 'os';
import path from 'path';
import { Color, ResourceGraphic } from './Graphic.type';
import { Graphics } from './Graphics';
import { GraphicsMockData } from './Graphics.data.mock';

const xmlParser = new FastXMLParser().getInstance();
const fileReader = new FileReader();
const fileParser = new FileParser(xmlParser);
const rootPath = tmpdir();
const filePath = path.join(rootPath, 'Resource/Graphics.xml');

beforeAll(async () => {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, GraphicsMockData);
});

afterAll(async () => {
  await rm(path.dirname(filePath), { recursive: true });
});

describe('Graphics', () => {
  describe('Initialization', () => {
    it('should be able to call new() on Graphics Class', () => {
      const graphics = new Graphics(fileReader, fileParser, filePath);
      expect(graphics).toBeTruthy();
    });
    it('should be an Instanceof Map', () => {
      const graphics = new Graphics(fileReader, fileParser, filePath);
      expect(graphics).toBeInstanceOf(Map);
    });
    it('should call load()', async () => {
      const graphics = new Graphics(fileReader, fileParser, filePath);
      const loadMethodSpy = jest.spyOn(graphics, 'load');
      await graphics.load();
      expect(loadMethodSpy).toHaveBeenCalledTimes(1);
    });

    it('should call set() when load() is called', async () => {
      const graphics = new Graphics(fileReader, fileParser, filePath);
      const setMethodSpy = jest.spyOn(graphics, 'set').mockImplementation();
      await graphics.load();
      expect(setMethodSpy).toHaveBeenCalled();
    });
  });
  describe('Errors', () => {
    it('should throw an error if filePath is empty or not found', async () => {
      expect.assertions(2);
      let graphics = new Graphics(fileReader, fileParser, 'filePath');
      await expect(graphics.load()).rejects.toThrowError();
      graphics = new Graphics(fileReader, fileParser, '');
      await expect(graphics.load()).rejects.toThrowError();
    });

    it('should not call set() if file not found', async () => {
      const graphics = new Graphics(fileReader, fileParser, 'filePath');
      const setMethodSpy = jest.spyOn(graphics, 'set');
      try {
        await graphics.load();
      } catch (error) {
        //
      } finally {
        expect(setMethodSpy).not.toHaveBeenCalled();
      }
    });
    it('should not call set() if filePath is empty string', async () => {
      const graphics = new Graphics(fileReader, fileParser, '');
      const setMethodSpy = jest.spyOn(graphics, 'set');
      try {
        await graphics.load();
      } catch (error) {
        //
      } finally {
        expect(setMethodSpy).not.toHaveBeenCalled();
      }
    });
  });
  describe('Implementation', () => {
    let colors: Color[];
    beforeAll(async () => {
      const parsedData = await fileParser.parse<ResourceGraphic>(GraphicsMockData);
      colors = parsedData['idPkg:Graphic'].Color.filter((color) => color.Self);
    });
    it('Size of Map should be equal to length of Colors Array', async () => {
      const graphics = new Graphics(fileReader, fileParser, filePath);
      await graphics.load();
      expect(graphics.size).toStrictEqual(colors.length);
    });
    it('should contain self values from the mock data', async () => {
      const graphics = new Graphics(fileReader, fileParser, filePath);
      await graphics.load();
      expect.assertions(graphics.size);
      colors.forEach((color) => expect(graphics.has(color.Self)).toBeTruthy());
    });
  });
});
