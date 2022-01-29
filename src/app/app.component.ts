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
  numberOfTeams: number | '' = '';

  teams: string[][] = [];

  color:string='beige';   // List element highlight color

  //Checking if user is trying to enter empty string or the same string consecutively
  addMember() {
    if (!this.newMemberName) {
      this.errorMsg='Please enter the name';
    } else if (this.members.includes(this.newMemberName)) {
      this.errorMsg='Name already exists. Please enter different name';
    } else {
        this.members.push(this.newMemberName);
        this.newMemberName = '';
        this.errorMsg = '';
    }
  }

  clear() {
    this.members = [];
    this.teams = [];
    this.errorMsg = '';
    this.newMemberName = '';
    this.numberOfTeams = '';
  }

  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <=0) {
      this.errorMsg='Please enter valid number of teams';
      return;
    }

    if (this.numberOfTeams > this.members.length) { this.numberOfTeams = this.members.length }

    this.teams = [[]];
    const allMembers = [...this.members];

    while (allMembers.length>0) {
      for (let i = 0; i<this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex,1)[0];
  
        if (member == undefined) {
          this.errorMsg = '';
          break;
        }

        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }        
      }
    }
    console.log(this.teams);

  }

  // // Functon for capitalizing first letter in every word of a string
  // capitalize(name:string) : string {
  //   let separateWord = name.split(' ');
  //   for (let i = 0; i < separateWord.length; i++) {
  //      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
  //      separateWord[i].substring(1);
  //   }
  //   return separateWord.join(' ');
  // }

}