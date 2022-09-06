import { DataProcessorClientInterface } from './DataProcessorClientInterface';
import { FontsDataProcessor } from './Resources/FontsDataProcessor/FontsDataProcessor';
import { GraphicDataProcessor } from './Resources/GraphicDataProcessor/GraphicDataProcessor';
import {
  DataProcessorInterface,
  ProcessorDataType,
  ProcessorReturnType,
} from './Resources/interfaces/DataProcessorInterface';
import { PreferenceDataProcessor } from './Resources/PreferencesDataProcessor/PreferencesDataProcessor';
import { StylesDataProcessor } from './Resources/StylesDataProcessor/StylesDataProcessor';
import { SpreadsDataProcessor } from './Spreads/SpreadsDataProcessor';
import { StoryDataProcessor } from './Stories/StoryDataProcessor';

export class DataProcessorClient implements DataProcessorClientInterface {
  private stylesDataProcessor: DataProcessorInterface;

  private graphicDataProcessor: DataProcessorInterface;

  private preferenceDataProcessor: DataProcessorInterface;

  private fontDataProcessor: DataProcessorInterface;

  private storyDataProcessor: DataProcessorInterface;

  private spreadDataProcessor: DataProcessorInterface;

  constructor() {
    this.stylesDataProcessor = new StylesDataProcessor();
    this.graphicDataProcessor = new GraphicDataProcessor();
    this.preferenceDataProcessor = new PreferenceDataProcessor();
    this.fontDataProcessor = new FontsDataProcessor();

    this.storyDataProcessor = new StoryDataProcessor();
    this.spreadDataProcessor = new SpreadsDataProcessor();

    this.stylesDataProcessor
      .setNext(this.graphicDataProcessor)
      .setNext(this.preferenceDataProcessor)
      .setNext(this.fontDataProcessor)
      .setNext(this.storyDataProcessor)
      .setNext(this.spreadDataProcessor);
  }

  process(data: ProcessorDataType): ProcessorReturnType {
    return this.stylesDataProcessor.process(data);
  }
}
