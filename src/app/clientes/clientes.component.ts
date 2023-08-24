import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteInterface } from './ClienteInterface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
 
dataSource: any=[];
displayedColumns: string[] = ['nombres','apellidos','direccion']

  constructor(private service:ClienteService) { }

  ngOnInit(): void {
    
    this.service.getClientes().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<ClienteInterface>(data.result as ClienteInterface[]);
      console.log(data);
    });  
  }

}
