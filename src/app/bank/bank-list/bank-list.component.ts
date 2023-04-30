import { Bank } from './../bank.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {
  banks: Bank[]=[
    new Bank('1','IOB'),
    new Bank('2','Karur Vysya Bank')
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
