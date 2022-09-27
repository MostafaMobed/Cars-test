import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-select-array',
  templateUrl: './html-select-array.component.html',
  styleUrls: ['./html-select-array.component.scss']
})
export class HtmlSelectArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
