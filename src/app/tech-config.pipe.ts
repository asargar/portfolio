import { Pipe, PipeTransform } from '@angular/core';
import { technologyMap } from '../assets/json/config.json';

@Pipe({
  name: 'techConfig'
})
export class TechConfigPipe implements PipeTransform {

  constructor() {

  }

  transform(techList: any, ...args: any[]): any {
    let transformedList = [];
    for (let tech of techList) {
      transformedList.push(technologyMap[tech] ? technologyMap[tech] : { title: tech, class: tech });
    }
    return transformedList;
  }

}
