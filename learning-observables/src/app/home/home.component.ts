import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import "rxjs/Rx";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberGeneratorSubscription: Subscription;
  myObervableSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    //Using Inbuild Obervable
    const numberGenerator = Observable.interval(1000);
    this.numberGeneratorSubscription = numberGenerator.subscribe((number: number) => {
      console.log("number : " + number);
    });

    //Creating an observable
    const myObervable = Observable.create((observer: Observer<string>) => {

      setTimeout(() => {
        observer.next("first package");
      }, 3000);

      setTimeout(() => {
        observer.next("second package");
      }, 4000);

      setTimeout(() => {
        observer.error("error package");
      }, 5000);

      setTimeout(() => {
        observer.complete();
      }, 8000);

    });

    //Subscribe to custom observable
    this.myObervableSubscription = myObervable.subscribe(
      (data: string) => { console.log("Data = " + data); },
      (error: string) => { console.log("Error = " + error); },
      () => { console.log("Completed!"); }
    );

  }

  ngOnDestroy(): void {
    this.numberGeneratorSubscription.unsubscribe();
    this.myObervableSubscription.unsubscribe();
  }


}
