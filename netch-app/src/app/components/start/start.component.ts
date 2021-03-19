import { Component, OnInit } from '@angular/core';
import { parallax } from 'src/app/functions/parallax';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    parallax()
  }

}
