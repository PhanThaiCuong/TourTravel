import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ProductlistService } from '../../services/productlist.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { query } from '@angular/animations';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  
  submited: boolean = false;
  id: number = 0;


  proAdd = this.fb.group({
    id : ['', Validators.required],
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
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(query => {
      let id: number = parseInt(query.get("id")!);
      this.proSrv.getById(id).subscribe(res => {
        console.log(res);
        let myPro = res;
        this.proAdd = this.fb.group({
          id : [myPro.id, Validators.required],
          id_loaitour: [myPro.id_loaitour, Validators.required],
          name: [myPro.name, Validators.required],
          price: [myPro.price, Validators.required],
          sale: [myPro.sale, Validators.required],
          img: [myPro.img, Validators.required],
          lich_trinh: [myPro.lich_trinh, Validators.required],
        })
      })
    })

    // let id = this.route.snapshot.params['id'];
    // this.proSrv.getById(id).subscribe(res => {
    //   this.proAdd.patchValue(res);
    // })
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

    this.proSrv.update(this.proAdd.value).subscribe(res => {
      this._router.navigate(['./admin/maindashboard']);
      console.log(res);
    })
  }
}

