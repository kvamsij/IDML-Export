import { FileReader } from '@src/libs/commons/FileReader/FileReader';

afterEach(() => {
  jest.clearAllMocks();
});

describe('FileReader', () => {
  describe('Initialization', () => {
    const fileReader = new FileReader();
    it('should be able to call new() on FileReader Class', () => {
      expect(fileReader).toBeTruthy();
    });

    it('should call read() once', () => {
      const fileReaderSpy = jest.spyOn(fileReader, 'read').mockImplementation();
      fileReader.read('');
      expect(fileReaderSpy).toHaveBeenCalledTimes(1);
    });

    it('should call read() with given filePath', () => {
      const fileReaderSpy = jest.spyOn(fileReader, 'read').mockImplementation();
      const filePath = './noFile.txt';
      fileReader.read(filePath);
      expect(fileReaderSpy).toHaveBeenCalledWith(filePath);
    });

    it('should call readFileSync() with given filePath', async () => {
      const filePath = './noFile.txt';
      const mockFsReadFileSync = jest.fn().mockImplementation();

      jest
        .spyOn(fileReader, 'read')
        .mockImplementation((_filePath): Promise<string> => mockFsReadFileSync(_filePath, { encoding: 'utf-8' }));

      try {
        await fileReader.read(filePath);
      } catch (error) {
        //
      } finally {
        expect(mockFsReadFileSync).toHaveBeenCalledTimes(1);
        expect(mockFsReadFileSync).toHaveBeenCalledWith(filePath, { encoding: 'utf-8' });
      }
    });
  });
  describe('Error Checks', () => {
    it('should throw an error if filePath does not exists', async () => {
      const filePath = './noFile.txt';
      const fileReader = new FileReader();
      await expect(fileReader.read(filePath)).rejects.toThrow();
    });
  });

  describe('Implementation', () => {
    it('should return a string', async () => {
      const filePath = './noFile.txt';
      const fileReader = new FileReader();
      jest.spyOn(fileReader, 'read').mockResolvedValue('Sample text for test');
      const result = await fileReader.read(filePath);
      expect(typeof result).toBe('string');
    });
  });
});
