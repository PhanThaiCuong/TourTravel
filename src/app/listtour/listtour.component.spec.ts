import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtourComponent } from './listtour.component';

describe('ListtourComponent', () => {
  let component: ListtourComponent;
  let fixture: ComponentFixture<ListtourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListtourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListtourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
