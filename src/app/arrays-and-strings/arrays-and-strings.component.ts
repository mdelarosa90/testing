import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays-and-strings',
  templateUrl: './arrays-and-strings.component.html',
  styleUrls: ['./arrays-and-strings.component.scss']
})
export class ArraysAndStringsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getCurrencies = () => {
    return ['USD', 'AUD', 'EUR'];
  }

  getGreet = (name) => {
    return 'Welcome' + name;
  }

}
