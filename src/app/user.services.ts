import { EventEmitter, Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()

export class userServices{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    

    constructor(public counterService: CounterService){}
    

    setInActive(id:number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        ++this.counterService.activeToinactiveCount;
        console.log(this.counterService.activeToinactiveCount);
    }

    setActive(id:number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        ++this.counterService.inactiveToactiveCount;
        console.log(this.counterService.inactiveToactiveCount);
    }
}