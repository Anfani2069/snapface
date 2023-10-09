import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "./core/models/face-snap.model";
import {filter, interval, map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  interval$!: Observable<string>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      // l'ordre des operateurs est important
      filter(value => value % 3 === 0),
      map(value => value % 2===0 ?
      `Je suis ${value} et suis pair` :
      `Je suis ${value} et suis impair`
      ),
      tap(text => this.logger(text))
    );

  }

  logger(text: string): void {
    console.log(`Log: ${text}`);
  }

}

