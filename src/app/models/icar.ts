import { BehaviorSubject } from 'rxjs';

export interface ICar {
  name: string;
  include: boolean;
  children?: ICar[];
  carsChildrenSub?: BehaviorSubject<ICar[]|undefined>
  }