import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tableModel } from './models/table.model';
import { MyErrorStateMatcher } from './services/ErrorState';
import { tableService } from './services/table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  displayedColumns: string[] = ['id','nome', 'sobrenome', 'idade', 'saldo','actions'];
  datasource!:tableModel[];
  form!:FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(private tableservice:tableService){}


  ngOnInit(): void {
    this.getData()
    this.form = new FormGroup({
      Nome: new FormControl('',[Validators.required]),
      SobreNome: new FormControl('',[Validators.required]),
      Idade: new FormControl('',[Validators.required]),
      Saldo: new FormControl('',[Validators.required]),
    })
    console.log(this.datasource)
    console.log(this.form)
  }

  getData(){
    this.tableservice.get().subscribe((data:any)=>{
      this.datasource = data;
      console.log(data)
    })
  }

  postData(){
    this.tableservice.post(this.form.value).subscribe((res)=>{
      console.log(res)
    })
    this.getData();
    this.form.reset();
    console.log(this.form.value)
  }

  deleteById(id:any){
    this.tableservice.delete(id).subscribe((data:any)=>{
      console.log(data)
    })
    this.getData();
  }


}
