import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageComponent } from './stage.component';
import { GameService } from '../game.service';

describe('StageComponent', () => {
  let component: StageComponent;
  let fixture: ComponentFixture<StageComponent>;

  beforeEach(async(() => {
    const template = `<div></div>`;
    TestBed.overrideComponent(StageComponent, {set: {template}});
    TestBed.configureTestingModule({
      declarations: [ StageComponent ],
      providers: [ GameService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
