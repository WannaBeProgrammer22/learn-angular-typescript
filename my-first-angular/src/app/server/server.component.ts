import { Component } from '@angular/core';

// tell angular that this is not a simple class but something special - a component
// add a decorator - a typescript feature thats allow you to enchance your classes. enhance your elements
// component decorator - that accept javascript object to config it - setup info stored as meta data for class so angular knows what to do with this class
@Component({
  selector: 'app-server', // must be unique 
  templateUrl: './server.component.html', // this external file must be created at the same folder, it must be a relative path

  // to use this component go to the app.module.ts to import it there this server component class
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}