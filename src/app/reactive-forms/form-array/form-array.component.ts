import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  //parent form group
  formGroup: FormGroup;

  //getter functions
  get controlsArray() {
    return this.selectsFormArray.controls;
  }
  get selectsFormArray() {
    return this.formGroup.get('selects') as FormArray
  }

  constructor() {
    let formArray = new FormArray([]);
    //create form array based on ordered keys array
    this.orderedKeys.forEach(key => {
      formArray.insert(formArray.length, new FormGroup({
        name: new FormControl(this.object[key].name)
      }))
    });

    this.formGroup = new FormGroup({selects: formArray});
  }

  refreshOrder(pos: number) {
    let val = this.controlsArray[pos-1].get('name')?.value;
    
    if (!val) return;
    let selectedKey = Object.keys(this.object).find((key: string) => this.object[key].name === val);
    let keyToSwap = this.orderedKeys[pos - 1];
    
    if(!selectedKey || !keyToSwap)
    return;

    //updating ordered keys array
    let selectedKeyPrevIndex = this.orderedKeys.indexOf(selectedKey);
    let newOrderedKeys = [...this.orderedKeys];
    newOrderedKeys[pos - 1] = selectedKey;
    newOrderedKeys[selectedKeyPrevIndex] = keyToSwap;
    this.orderedKeys = newOrderedKeys;
    
    //refresh form control
    this.controlsArray[selectedKeyPrevIndex].get('name')?.setValue(this.object[keyToSwap].name);
  }

  move(index: number, direction: number) {
    let temp = this.selectsFormArray.at(index);
    this.selectsFormArray.removeAt(index);
    this.selectsFormArray.insert(index+direction,temp);

    //updating ordered keys array too:
    let clonedOrderedKeys = [...this.orderedKeys];
    clonedOrderedKeys[index] = this.orderedKeys[index+direction];
    clonedOrderedKeys[index+direction] = this.orderedKeys[index];
    this.orderedKeys = clonedOrderedKeys;
  }

  ngOnInit(): void {
    // this.formArray.get('rankSelect')?.valueChanges.subscribe(val => {
    //   console.log(val);
    // });
  }

  orderedKeys = ['keyA', 'keyB', 'keyC', 'keyD'];
  object: {[key: string]: any} = {
    'keyA': {name: 'nameA'},
    'keyB': {name: 'nameB'},
    'keyC': {name: 'nameC'},
    'keyD': {name: 'nameD'},
  }
  options = ['nameA', 'nameB', 'nameC', 'nameD'];
  flag = true;

  changePosition(event: any, pos: number) {
    let val = event?.target?.value;
    if (!val) return;
    let selectedKey = Object.keys(this.object).find((key: string) => this.object[key].name === val);
    let keyToSwap = this.orderedKeys[pos - 1];
    if(!selectedKey || !keyToSwap)
      return;
    let newOrderedKeys = [...this.orderedKeys];
    newOrderedKeys[pos - 1] = selectedKey;
    newOrderedKeys[this.orderedKeys.indexOf(selectedKey)] = keyToSwap;
    
    this.orderedKeys = newOrderedKeys;
    this.flag = false;
    setTimeout(() => {
      this.flag = true;
    }, 0);
  }

}
