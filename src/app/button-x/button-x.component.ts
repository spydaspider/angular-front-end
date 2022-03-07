import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-button-x',
  templateUrl: './button-x.component.html',
  styleUrls: ['./button-x.component.css']
})
export class ButtonXComponent implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit(): void {
  }
   goBack():void{
     this.location.back();
   }
}
