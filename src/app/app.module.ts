import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BankComponent } from './bank/bank.component';
import { BankListComponent } from './bank/bank-list/bank-list.component';
import { BankDetailComponent } from './bank/bank-detail/bank-detail.component';
import { BankItemComponent } from './bank/bank-list/bank-item/bank-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BankComponent,
    BankListComponent,
    BankDetailComponent,
    BankItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
