import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMsg = '';
  numberOfTeams = 0;
  teams: string[][] = [[]];

  color:string='beige';   // List element highlight color

  //Checking if user is trying to enter empty string or the same string consecutively
  addMember() {
    if (!this.newMemberName) {
      //this.errorTxt('Please enter the name', 3000);
      this.errorMsg='Please enter the name';
    } else if (this.members.includes(this.newMemberName)) {
      //this.errorTxt('Name already exists. <br>Please enter different name',4000);
      this.errorMsg='Name already exists. Please enter different name';
    } else {
        this.members.push(this.newMemberName);
        this.newMemberName = '';
        this.errorMsg = '';

      /* Changed for Angular *ngFor syntax

      // Create a <li> node
      let node = document.createElement('LI');
      // Create a text node
      let textnode = document.createTextNode(
        this.members[this.members.length - 1]
      );
      // Append the text to <li>
      node.appendChild(textnode);
      // Append <li> to <ul> with class="list"
      document.getElementsByClassName('list')[0].appendChild(node);
      */

    }
  }

  onInput(member: string) {
    this.newMemberName = member;
  }

  // Displaying Error message 'errorText' inside <div class="error-msg"></div> element for 'delay' milliseconds
  // Changed for errorMsg flag
  /*
  errorTxt(errorText: string, delay: number) {
    document.getElementsByClassName('error-msg')[0].innerHTML = errorText;
    setTimeout(function () {
      document.getElementsByClassName('error-msg')[0].innerHTML = '';
    }, delay);
  } */

  
//TODO
  splitIntoTeams(numberOfTeams:number):string[][] {
    const random = (min:number, max:number) => Math.floor(Math.random() * (max - min)) + min;

    let teams: string[][] = [[]];
    let tempMembers = this.members;


    tempMembers[random(0,tempMembers.length)]

    return teams;
  }

}
