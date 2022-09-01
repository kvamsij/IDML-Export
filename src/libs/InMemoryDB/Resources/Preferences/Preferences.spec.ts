import { FastXMLParser } from '@src/libs/commons/FastXMLParser';
import { FileParser } from '@src/libs/commons/FileParser/FileParser';
import { FileReader } from '@src/libs/commons/FileReader/FileReader';
import { mkdir, rm, writeFile } from 'fs/promises';
import { tmpdir } from 'os';
import path from 'path';
import { Preferences } from './Preferences';
import { DocumentPreference, IDMLPreferences } from './Preferences.type';
import { PreferencesMockData } from './Preferneces.data.mock';

const xmlParser = new FastXMLParser().getInstance();
const fileReader = new FileReader();
const fileParser = new FileParser(xmlParser);
const rootPath = tmpdir();
const filePath = path.join(rootPath, 'Resource/Preferences.xml');

beforeAll(async () => {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, PreferencesMockData);
});

afterAll(async () => {
  await rm(path.dirname(filePath), { recursive: true });
});

describe('Preferences', () => {
  describe('Initialization', () => {
    it('should be able to call new() on Preferences Class', () => {
      const preferences = new Preferences(fileReader, fileParser, filePath);
      expect(preferences).toBeTruthy();
    });

    it('should be able an InstanceOf Map', () => {
      const preferences = new Preferences(fileReader, fileParser, filePath);
      expect(preferences).toBeInstanceOf(Map);
    });
    it('should be able to call load() on Preferences Class', () => {
      const preferences = new Preferences(fileReader, fileParser, filePath);
      const loadMethodSpy = jest.spyOn(preferences, 'load');
      preferences.load();
      expect(loadMethodSpy).toBeCalledTimes(1);
    });

    it('should call set() on calling load()', async () => {
      const preferences = new Preferences(fileReader, fileParser, filePath);
      const setMethodSpy = jest.spyOn(preferences, 'set');
      await preferences.load();
      expect(setMethodSpy).toBeCalledTimes(1);
    });
  });
  describe('Errors', () => {
    it('should throw an error if filePath is an empty string', async () => {
      const preferences = new Preferences(fileReader, fileParser, '');
      await expect(preferences.load()).rejects.toThrowError();
    });

    it('should not call set() if filePath is an empty string', async () => {
      const preferences = new Preferences(fileReader, fileParser, '');
      const setMethodSpy = jest.spyOn(preferences, 'set');
      try {
        await preferences.load();
      } catch (error) {
        //
      } finally {
        expect(setMethodSpy).not.toHaveBeenCalled();
      }
    });

    it('should throw an error if file not found', async () => {
      const preferences = new Preferences(fileReader, fileParser, './filePath');
      await expect(preferences.load()).rejects.toThrowError();
    });
    it('should not call set() if file not found', async () => {
      const preferences = new Preferences(fileReader, fileParser, './filePath');
      const setMethodSpy = jest.spyOn(preferences, 'set');
      try {
        await preferences.load();
      } catch (error) {
        //
      } finally {
        expect(setMethodSpy).not.toHaveBeenCalled();
      }
    });
  });
  describe('Implementation', () => {
    let preferencesObject: DocumentPreference;
    beforeAll(async () => {
      const parsedData = await fileParser.parse<IDMLPreferences>(PreferencesMockData);
      preferencesObject = parsedData['idPkg:Preferences'].DocumentPreference;
    });
    it(`should have key 'DocumentPreference'`, async () => {
      const preferences = new Preferences(fileReader, fileParser, filePath);
      await preferences.load();
      expect(preferences.has('DocumentPreference')).toBeTruthy();
    });

    it(`should match value and mockData object`, async () => {
      const preferences = new Preferences(fileReader, fileParser, filePath);
      await preferences.load();
      expect(preferences.get('DocumentPreference')).toStrictEqual(preferencesObject);
    });
  });
});
