import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online{
    color: white;
  }
  `]
})
export class ServerComponent implements OnInit {

  @Input()
  public serverId: string = "10";
  serverStatus = 'offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "offline": "Online";
  }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    if(this.serverStatus === 'offline')
    return "red";
    else
    return "green"
  }
}
