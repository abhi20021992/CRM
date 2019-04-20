import { Component, OnInit } from '@angular/core';
import { LeadService } from 'app/services/lead.service';
import { map } from 'rxjs/operators';
import { Lead } from 'app/modals/Lead';
import { MatDialog } from '@angular/material';
import { DialogComponent } from 'app/components/dialog/dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {

  displayedColumns = ['FirstName','LastName','Email','Phone'];
  //,'Mobile','Address','LeadSource','LeadStage','LeadStatus','LeadOwner','ProjectName','Company','Website','NoofBedRoom','NoofKitchen','Location','Budget','Possession','Size','Favourite','PropertyType','PropertyAge','Furnished','Vastu','Preference','City','Type','CreatedBy','ModifiedBy','Id','CreatedOn','ModifiedOn','IsDeleted','DeletedOn'];
  columnsToDisplay: string[] = this.displayedColumns.slice().concat(["actions"]);
  data: Lead[];
  actions = 'actions';

  constructor(private leadService: LeadService, private dialog: MatDialog) { }

  ngOnInit() {
    this.leadService.getAllLeads().subscribe(leads=>{
        this.data =  leads;
    });
  }

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  // shuffle() {
  //   let currentIndex = this.columnsToDisplay.length;
  //   while (0 !== currentIndex) {
  //     let randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // Swap
  //     let temp = this.columnsToDisplay[currentIndex];
  //     this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
  //     this.columnsToDisplay[randomIndex] = temp;
  //   }
  // }

  editLead(lead: Lead){
    const dialogRef = this.dialog.open(DialogComponent, {
      data: lead
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getColumnDisplayName(column:string){
    return column.replace(/([A-Z])/g, ' $1')
    .replace(/^./, function(str){ return str.toUpperCase(); }).trim();
  }

  create(){
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
