import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BitacoryService } from 'src/app/services/bitacory.service';
import { Bitacory } from 'src/app/models/Bitacory';

@Component({
  selector: 'app-bitacories',
  templateUrl: './bitacories.component.html',
  styleUrls: ['./bitacories.component.css']
})
export class BitacoriesComponent implements OnInit {
  bitacories: Bitacory[];

  constructor(private bitacoryService: BitacoryService, private router: Router) { }

  ngOnInit() {
    this.getBitacories();
  }

  getBitacories() {
    this.bitacoryService.getBitacories().subscribe(data => {
      this.bitacories = data;
      console.log(this.bitacories);
    });
  }

  deleteBitacory(id: number) {
    const res = confirm('Are you sure delete this item?');
    if (res) {
      this.bitacoryService.deleteBitacory(id).subscribe(() => {
        this.getBitacories();
      });
    }
  }

  createBitacory(){
    this.router.navigate(['/bitacory/create']);
  }

  editBitacory(id: number){
    this.router.navigate(['/bitacory/edit', id]);
  }

}
