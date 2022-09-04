// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable class-methods-use-this */

import { IDMLStyles, IDPkgStyles } from '../Resources/Styles/Styles.type';

export class StylesDataProcessor {
  process(data: IDMLStyles): IDPkgStyles {
    return data['idPkg:Styles'];
  }
}
