import { ProcessorDataType } from '../Resources/interfaces/DataProcessorInterface';
import { DesignMap } from './designMap.type';

export const getExpectedData = (data: ProcessorDataType) => {
  const processedData = data as DesignMap;
  return {
    storyPaths: processedData.Document['idPkg:Story'].map((filePath) => filePath.src),
    spreadPaths: Array.isArray(processedData.Document['idPkg:Spread'])
      ? processedData.Document['idPkg:Story'].map((filePath) => filePath.src)
      : [processedData.Document['idPkg:Spread'].src],
    resourcesPaths: {
      graphicPath: processedData.Document['idPkg:Graphic'].src,
      fontsPath: processedData.Document['idPkg:Fonts'].src,
      preferencesPath: processedData.Document['idPkg:Preferences'].src,
      stylesPath: processedData.Document['idPkg:Styles'].src,
    },
  };
};
