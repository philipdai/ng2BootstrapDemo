/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { DashboardModule } from './dashboard/dashboard.module';
import { StockModule } from './stocks/stocks.module';
import { APP_BASE_HREF } from '@angular/common';
import { By } from '@angular/platform-browser';
import {isNullOrUndefined} from "util";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        routing,
        DashboardModule,
        StockModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF, useValue: '/'
        }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render a div with class container-fluid', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let divContainerFluid = fixture.debugElement.query(By.css('.container-fluid'));

    expect(divContainerFluid).not.toBe(isNullOrUndefined);
  }));
});
