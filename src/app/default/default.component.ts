import { Component, OnInit } from '@angular/core';

import * as Handsontable from 'handsontable';


import { UserserviceService } from '../userservice.service'
import {User} from '../../user';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  private dataset = [] ;
  tableID : string ="UserTable";
  tablesettings : {};
  selectedUserID : number;


  constructor(private uService: UserserviceService) { }

  ngOnInit() {
    const that = this;

    this.uService.getUsersList()
                 .subscribe( data => this.dataset = data);

  

    this.tablesettings = {
      data : this.dataset,
      observeChange : true,
      columns : [
        { data : 'id',
          title : 'ID',
          readOnly : true,
        },
        { data :'name',title : 'NAME'}
      ],
      afterOnCellMouseDown:(event,TD,coords) =>{
        if (coords.col !== 0) {
          return;
        }        
        that.onSelect(event.getDataAtCell(coords.row,coords.col));

      }

    }
  }

  onSelect(userID:number):void{
    this.selectedUserID = userID;
    console.log(this.selectedUserID)

  }

}
