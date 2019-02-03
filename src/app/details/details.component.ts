import { Component, OnInit, Input, OnChanges , SimpleChanges} from '@angular/core';
import { UserserviceService } from "../userservice.service";


import { User } from "../../user";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnChanges {

  @Input() userID:string;

  selectedUser:User;
  showUI:boolean = false;

  constructor(private userService:UserserviceService) { }

  ngOnInit() {


  }

  ngOnChanges(changes: SimpleChanges){
    //To avoid GET request with no Meaning
    if(typeof changes.userID.currentValue == 'undefined'){
        this.showUI = false;
        console.log(this.showUI);
        return
      }
    this.userService.getUserDetail(this.userID)
                    .subscribe(user => this.selectedUser = user);
    this.showUI = true;
    }



  }
