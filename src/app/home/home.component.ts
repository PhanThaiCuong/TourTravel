import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { OnInit } from '@angular/core';
import { SanphamService } from '../services/sanpham.service';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,NgFor,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  sanphams : any;

  constructor( private sanpham : SanphamService) { }

  ngOnInit(): void {  
    this.sanpham.getsanPham().subscribe( res =>{
      this.sanphams = res;
    })
  }

}
