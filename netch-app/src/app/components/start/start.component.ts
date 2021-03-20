import { Component, OnInit } from '@angular/core';
import { carousel, carouselNext } from 'src/app/functions/carousel';
import { parallax } from 'src/app/functions/parallax';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.materialize()
  }

  public materialize() {

    parallax()

    carousel()
    setInterval(() => {
      carouselNext(1)
    }, 1e4);
  }
}
