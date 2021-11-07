import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  // decorator indica que tipo es, en este caso es un pipe
  name: "exponential"
})
export class ExponentialPipe implements PipeTransform {
  transform(value: number): any {
    return Math.pow(value, 2);
  }
}
