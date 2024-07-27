import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../../services/productlist.service';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-maindashboard',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive,NgxPaginationModule],
  templateUrl: './maindashboard.component.html',
  styleUrl: './maindashboard.component.css'
})
export class MaindashboardComponent implements OnInit {

  products : any;
  p: number = 1;

  constructor( private pro : ProductlistService) { }
  ngOnInit(): void {
    this.pro.getList().subscribe( res =>{
      this.products = res;
    })
  }
  onDelete(id : any){
    this.pro.delete(id).subscribe( res =>{
      alert("Xoa thanh cong");
      console.log(res);
      this.ngOnInit();
    })
  }

}
