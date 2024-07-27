  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
  import { DetailsService } from '../services/details.service';
  import { NgFor } from '@angular/common';
  import { HttpClientModule } from '@angular/common/http';
  import { HttpClient } from '@angular/common/http';
  import { KeyValuePipe } from '@angular/common';
  import { NgIf } from '@angular/common';
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-detail',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, NgFor, HttpClientModule , KeyValuePipe,NgIf,CommonModule],
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
  })
  export class DetailComponent implements OnInit {
    detailsp: any;  
    
    constructor( 
      private route: ActivatedRoute,
      private detailsService: DetailsService
    ) { }

    ngOnInit(): void {
      let id = this.route.snapshot.params['id'];
      console.log(id); 
    
      this.detailsService.getDetails(id).subscribe(res => {
        this.detailsp = res;
        console.log(this.detailsp[0].id); 
      });
    }
  }