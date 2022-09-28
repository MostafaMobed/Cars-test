import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.scss']
})
export class ForLoopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = ['1', '2', '3', '4', '5', '6', '7', '8'];
  numberOfCols = 3;
  ceil(x: number) {
    return Math.ceil(x);
  }

}
