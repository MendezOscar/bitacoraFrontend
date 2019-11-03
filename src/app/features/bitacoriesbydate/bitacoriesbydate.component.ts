import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BitacoryService } from 'src/app/services/bitacory.service';
import { Bitacory } from 'src/app/models/Bitacory';

@Component({
  selector: 'app-bitacoriesbydate',
  templateUrl: './bitacoriesbydate.component.html',
  styleUrls: ['./bitacoriesbydate.component.css']
})
export class BitacoriesbydateComponent implements OnInit {
  bitacories: Bitacory[];
  date1: string;
  date2: string;

  constructor(private bitacoraService: BitacoryService, private router: Router) { }

  ngOnInit() {
  }

  getResult() {
    this.getBitacoryForDates(this.date1, this.date2);
  }

  getBitacoryForDates(date1: string, date2: string) {
    this.bitacoraService.getBitacoryByDates(date1, date2).subscribe(res => {
      this.bitacories = res;
    });
  }
}
