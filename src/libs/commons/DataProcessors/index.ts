import { FontsDataProcessor } from './Resources/FontsDataProcessor/FontsDataProcessor';
import { GraphicDataProcessor } from './Resources/GraphicDataProcessor/GraphicDataProcessor';
import {
  DataProcessorInterface,
  ProcessorDataType,
  ProcessorReturnType,
} from './Resources/interfaces/DataProcessorInterface';
import { PreferenceDataProcessor } from './Resources/PreferencesDataProcessor/PreferencesDataProcessor';
import { StylesDataProcessor } from './Resources/StylesDataProcessor/StylesDataProcessor';

export class DataProcessor {
  private stylesDataProcessor: DataProcessorInterface;

  private graphicDataProcessor: DataProcessorInterface;

  private preferenceDataProcessor: DataProcessorInterface;

  private fontDataProcessor: DataProcessorInterface;

  constructor(private data: ProcessorDataType) {
    this.stylesDataProcessor = new StylesDataProcessor();
    this.graphicDataProcessor = new GraphicDataProcessor();
    this.preferenceDataProcessor = new PreferenceDataProcessor();
    this.fontDataProcessor = new FontsDataProcessor();

    this.stylesDataProcessor
      .setNext(this.graphicDataProcessor)
      .setNext(this.preferenceDataProcessor)
      .setNext(this.fontDataProcessor);
  }

  process(): ProcessorReturnType {
    return this.stylesDataProcessor.process(this.data);
  }
}
