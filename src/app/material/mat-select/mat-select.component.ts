import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.scss']
})
export class MatSelectComponent implements OnInit {

  constructor() {
    this.elements.forEach(elem => {
      this.values.push({
        "txn_type_ids": elem.txn_type_id ? elem.txn_type_id.split(',') : []
      });
    });
   }

  ngOnInit(): void {
    
  }

  txnTypeList = [
    {
      id: 1,
      name: 'row1'
    },
    {
      id: 2,
      name: 'row2'
    },
    {
      id: 3,
      name: 'row3'
    }
  ];

  elements = [
    {
      name: "name1",
      txn_type_id: "1,2"
    }, 
    {
      name: "name2",
      txn_type_id: "3"
    }
  ];

  values: any[] = [
    // {
    //   txn_type_ids: ['1', '2']
    // }, 
    // {
    //   txn_type_ids: ['3']
    // }
  ];

  logValues() {
    console.log(this.values);
    
  }
}
