import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  public searchValue: string;

  constructor() { }

  ngOnInit() {
  }

  public find(): void {
    console.log(`Search value: ${this.searchValue}`);
  }

}
