import { Component, VERSION, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
ngOnInit(): void {
of(1,2,3,4)
.pipe(
  map(x=>x*2),
  tap(console.log),
  take(2)
  )
  .subscribe()
}
  name = 'Angular ' + VERSION.major;
}
