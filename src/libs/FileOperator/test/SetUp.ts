import { DataLoaderClient } from '@src/libs/commons/DataLoaders/DataLoaderClient';
import { DataProcessorClient } from '@src/libs/commons/DataProcessors/DataProcessorClient';
import { FastXMLParser } from '@src/libs/commons/FastXMLParser';
import { FileParser } from '@src/libs/commons/FileParser/FileParser';
import { FileReader } from '@src/libs/commons/FileReader/FileReader';

const xmlParser = new FastXMLParser().getInstance();
export const fileReader = new FileReader();
export const fileParser = new FileParser(xmlParser);
export const dataProcessor = new DataProcessorClient();
export const dataLoader = new DataLoaderClient();
