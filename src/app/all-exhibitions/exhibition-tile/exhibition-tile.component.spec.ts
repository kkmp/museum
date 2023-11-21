import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionTileComponent } from './exhibition-tile.component';

describe('ExhibitionTileComponent', () => {
  let component: ExhibitionTileComponent;
  let fixture: ComponentFixture<ExhibitionTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExhibitionTileComponent]
    });
    fixture = TestBed.createComponent(ExhibitionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
