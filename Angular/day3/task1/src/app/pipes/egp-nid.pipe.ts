import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egpNId',
  standalone: true
})
export class EgpNIdPipe implements PipeTransform {
  date: number = 0;
  transform(nId: string, format:string): number {
    if (nId[0] == '3') {
      this.date = 2000;
      this.date += (parseInt(nId[1]) * 10);
      this.date += parseInt(nId[2]);
    }
    else if (nId[0] == '2') {
      this.date = 1900;
      this.date += (parseInt(nId[1]) * 10);
      this.date += parseInt(nId[2]);
    }
    else {
      this.date = 0;
    }
    if(format=="YY")
    return this.date;
    else if(format=="MM")
    return parseInt(nId[3])*10 +parseInt(nId[4]) ;
    return (parseInt(nId[5])*10) + parseInt(nId[6]);
  }

}
