import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class EventDurationPipe implements PipeTransform {
  /**
   * Trasnform method must be overwritten to implement custom logic to expose put custome built pipes
   * @param value: This method takes any input on which Pipe has to be applied  
   */
  transform(value: any): string {
    switch(value){
      case 1: return 'Half Hour';
      case 2: return 'One Hour';
      case 3: return 'Half Day';
      case 4: return 'Full Day';
      default: return value.toString();
    }
  }

}
