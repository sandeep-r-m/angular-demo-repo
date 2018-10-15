import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ServerDetails } from '../../model/server-details';
import { ServersService } from '../../services/servers.service';
import { Observable } from 'rxjs';
import { LoggingService } from '../../services/logging.service';

@Injectable({
  providedIn: 'root'
})
export class ServerDataResolverService implements Resolve<ServerDetails> {

  constructor(private loggingService: LoggingService, private serversService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ServerDetails | Promise<ServerDetails> | Observable<ServerDetails> {

    this.loggingService.log("ServerDataResolverService::resolve() called");

    const id: number = +route.params["id"];
    this.loggingService.log("id=" + id);

    const serverDetails: ServerDetails = this.serversService.getServer(id);

    return serverDetails;

  }
}
