import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlSelectArrayComponent } from './html-select-array.component';

describe('HtmlSelectArrayComponent', () => {
  let component: HtmlSelectArrayComponent;
  let fixture: ComponentFixture<HtmlSelectArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlSelectArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlSelectArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
