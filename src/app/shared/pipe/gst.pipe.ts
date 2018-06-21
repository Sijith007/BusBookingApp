import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gst'
})
export class GstPipe implements PipeTransform {

  transform(value: any, per?: any, minAmount?: any, isTotalAmount?: any): any {
    let gstAmount = 0;
    let totalAmount = value;
    if(value > minAmount) {
      gstAmount = value * (per/100);
      totalAmount += gstAmount; 
    }

    return isTotalAmount ? totalAmount : gstAmount;
  }

}
