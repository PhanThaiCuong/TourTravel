import { Component } from '@angular/core';
import { ListsptheoloaiService } from '../services/listsptheoloai.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listproduct',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, HttpClientModule],
  templateUrl: './listproduct.component.html',
  styleUrl: './listproduct.component.css'
})
export class ListproductComponent implements OnInit {

  listsp: any;
  constructor( private listsptheoloai : ListsptheoloaiService) { }

  ngOnInit(): void {
    this.listsptheoloai.getlistsptheoloai().subscribe(res => {
      this.listsp = res
    })
  }
}
