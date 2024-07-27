import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ProductlistService } from '../../services/productlist.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent implements OnInit {

  submited: boolean = false; 

  proAdd = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    sale: ['', Validators.required],
    img: ['', Validators.required],
    lich_trinh: ['', Validators.required],
    id_loaitour: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private proSrv : ProductlistService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  get f(){
    return this.proAdd.controls;
  }
  onsubmit(): any {
    this.submited = true;
    if (this.proAdd.invalid) {
      return false; 
    }
    //them moi

    this.proSrv.add(this.proAdd.value).subscribe(res => {
      this._router.navigate(['./admin/maindashboard']);
    })
  }
}
