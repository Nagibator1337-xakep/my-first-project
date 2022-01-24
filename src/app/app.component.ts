import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];

  //Checking if user is trying to enter empty string or the same string consecutively
  addMember() {
    if (this.newMemberName === '') {
      this.errorTxt('Please enter the name', 3000);
    } else if (this.members[this.members.length - 1] === this.newMemberName) {
      this.errorTxt(
        "This is the name you've just entered. <br/>Please enter different name",
        4000
      );
    } else this.members.push(this.newMemberName);
    console.log(this.members);
  }

  onKey(event: any) {
    this.newMemberName = event.target.value;
  }

  // Displaying Error message 'errorText' inside <div class="error-msg"></div> element for 'delay' milliseconds
  errorTxt(errorText: string, delay: number) {
    document.getElementsByClassName('error-msg')[0].innerHTML = errorText;
    setTimeout(function () {
      document.getElementsByClassName('error-msg')[0].innerHTML = '';
    }, delay);
  }
}
