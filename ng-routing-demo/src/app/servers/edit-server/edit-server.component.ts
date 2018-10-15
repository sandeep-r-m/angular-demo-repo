import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ServersService } from '../../services/servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';

  @ViewChild("serverNameInputField") serverNameInputField: ElementRef;
  @ViewChild("serverStatusInputField") serverStatusInputField: ElementRef;

  constructor(private loggingService: LoggingService, private serversService: ServersService, private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentRoute.params.subscribe((params: Params) => {
      this.loggingService.log("EditServerComponent::params.subscribe -\n id=" + params['id']);
      this.server = this.serversService.getServer(+params['id']);
      this.loggingService.log("server = " + this.server);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
  }

  onUpdateServer() {
    this.serverName = this.serverNameInputField.nativeElement.value;
    this.serverStatus = this.serverStatusInputField.nativeElement.value;
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }

}
