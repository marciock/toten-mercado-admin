import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
@Input() heads:any;
@Input() list:any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
