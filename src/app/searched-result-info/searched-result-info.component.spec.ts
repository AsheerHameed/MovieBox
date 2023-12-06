import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedResultInfoComponent } from './searched-result-info.component';

describe('SearchedResultInfoComponent', () => {
  let component: SearchedResultInfoComponent;
  let fixture: ComponentFixture<SearchedResultInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedResultInfoComponent]
    });
    fixture = TestBed.createComponent(SearchedResultInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
