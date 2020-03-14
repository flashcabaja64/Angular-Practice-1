import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  userName= '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  
  // #2 Assignment
  password='Best PSWD ever!';
  passwordToggle = false;
  passwords = [];
  secret = ''

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    //this.serverName = event.target.value; //only if (event: any)
    //The below HTMLInputElement informs TS the target.value is a type input element
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onPasswordUpdate() {
    this.passwordToggle = !this.passwordToggle;
    this.passwords.push(new Date())
  }


}
