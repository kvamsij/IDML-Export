// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable class-methods-use-this */

import { IDMLPreferences } from '../Resources/Preferences/Preferences.type';

export class PreferenceDataProcessor {
  process(data: IDMLPreferences) {
    return data['idPkg:Preferences'].DocumentPreference;
  }
}
