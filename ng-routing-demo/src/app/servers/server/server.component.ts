import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../services/servers.service';
import { ActivatedRoute, Params, Route, Router, Data } from '@angular/router';
import { ServerDetails } from '../../model/server-details';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  //server: { id: number, name: string, status: string };

  server: ServerDetails = null;

  constructor(private serversService: ServersService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    //Calling service to get the data. But not dynamic approach.
    //this.server = this.serversService.getServer(1);

    //Subscribing to URL parameter changes to get path params and load data from backend
    /*
    this.currentRoute.params.subscribe((params: Params) => {
      const server = this.serversService.getServer(+params['id']);
      this.server = server;
    });
    */

    //Using resolver to get the data. Usecase could be async data loading from backend.
    this.currentRoute.data.subscribe(
      (data: Data) => { this.server = data['server']; }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.currentRoute });
  }

}
