import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  // template: `
  //   <h2>
  //     Welcome {{name}}
  //   </h2>

   

  //   <button (click)="onClick($event)">Greet</button>
  //   {{greetings}}
  //   {{eventName}}
  // `,

  //  template: `
  //    <h2>
  //      Welcome {{name}}
  //    </h2>
  //    <input [id] = "myId" type="text" value = "initial"><br>
  //    <input disabled = "{{false}}" type="text" value = "initial"><br>
  //    <input [disabled] = "false" type="text" value = "initial">
  //  `,

  // templateUrl: './test.component.html',
  // styleUrls: ['./test.component.css']
  // template: `
  //   <h2>
  //       Welcome {{name}}
  //   </h2>
  //   <h2>2+2</h2>
  //   <h2>"2+2"</h2>
  //   <h2>"sum:-"+(2+2)</h2>
  //   <h2>{{getName()}}</h2>
  //   <h2>{{name.length}}</h2>
  //   <h2>Current page url :- {{pageUrl}}</h2>
  //   `,
  styles: ['h2 {color:red};']
})
export class TestComponent implements OnInit {

  @Input('parentData') public data;
  @Output() public childEvent = new EventEmitter();

  public myId = 'angular1';
  public pageUrl = window.location.href;

  public name = 'Ankit';
  public greetings = "";
  public eventName ="";
  public message = "";

  public displayName = false;

  firstEvent(){
    this.childEvent.emit('message from child component');
  }

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(){
    this.displayName = true;
  }



  logMessage(myInput){
    console.log(myInput);
    
  }

  myInputMessage(event){
    console.log(event);
    console.log(event.value);
    
  }

  onClick(event){
    console.log(event);
    this.eventName = event.type;
    this.greetings = 'Today\'s your day';
  }

  getName(){
    return this.name;
  }

}
