import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfClasses } from './list-of-classes';

describe('ListOfClasses', () => {
  let component: ListOfClasses;
  let fixture: ComponentFixture<ListOfClasses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfClasses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfClasses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
