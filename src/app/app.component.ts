import { Component, OnInit } from '@angular/core';
import { InitIconsService } from './core/services/init-icons/init-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private initIconsService: InitIconsService) {}

  ngOnInit() {
    this.initIconsService.init();
  }
}
