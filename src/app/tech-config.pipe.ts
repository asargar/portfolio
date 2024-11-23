import { Pipe, PipeTransform } from '@angular/core';
import { ConfigService } from './config.service';

@Pipe({
  name: 'techConfig'
})
export class TechConfigPipe implements PipeTransform {

  private technologyMap = ConfigService.getConfig().technologyMap

  transform(techList: string[]): { title: string, class: string }[] {
    return techList.map(tech => (this.technologyMap[tech] ? this.technologyMap[tech] : { title: tech, class: tech }));
  }

}
