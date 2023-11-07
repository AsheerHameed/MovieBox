import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCastsComponent } from './featured-casts.component';

describe('FeaturedCastsComponent', () => {
  let component: FeaturedCastsComponent;
  let fixture: ComponentFixture<FeaturedCastsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedCastsComponent]
    });
    fixture = TestBed.createComponent(FeaturedCastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
