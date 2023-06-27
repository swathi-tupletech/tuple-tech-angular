import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DevsecopsComponent } from './products/devsecops/devsecops.component';
import { ComplianceComponent } from './products/compliance/compliance.component';
import { ServicesComponent } from './services/services.component';
import { CustomersComponent } from './customers/customers.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { TroposComponent } from './tropos/tropos.component';
import { DigitalTransformationComponent } from './digital-transformation/digital-transformation.component';
import { SecurityShieldComponent } from './security-shield/security-shield.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    DevsecopsComponent,
    ComplianceComponent,
    ServicesComponent,
    CustomersComponent,
    PartnersComponent,
    ContactsComponent,
    AboutComponent,
    TroposComponent,
    DigitalTransformationComponent,
    SecurityShieldComponent
  ],
  imports: [
    BrowserModule, NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

