// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable class-methods-use-this */
import { Color, ResourceGraphic } from '../Resources/Graphics/Graphic.type';

export class GrpahicDataProcessor {
  process(data: ResourceGraphic): Color[] {
    return data['idPkg:Graphic'].Color;
  }
}
