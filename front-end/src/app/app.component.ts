import { Component, OnInit } from '@angular/core';
import { tableModel } from './models/table.model';
import { tableService } from './services/table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  displayedColumns: string[] = ['Nome', 'SobreNome', 'Idade', 'Saldo'];
  datasource!:tableModel[];

  constructor(private tableservice:tableService){}

  getData(){
    this.tableservice.get().subscribe((data:any)=>{
      this.datasource = data;
      console.log(data)
    })
  }
  ngOnInit(): void {
    this.getData()
    console.log(this.datasource)
  }
}
