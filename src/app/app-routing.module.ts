import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DevsecopsComponent } from './products/devsecops/devsecops.component';
import { ComplianceComponent } from './products/compliance/compliance.component';
import { ServicesComponent } from './services/services.component';
import { PartnersComponent } from './partners/partners.component';
import { CustomersComponent } from './customers/customers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { TroposComponent } from './tropos/tropos.component';
import { DigitalTransformationComponent } from './digital-transformation/digital-transformation.component';
import { SecurityShieldComponent } from './security-shield/security-shield.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/partners', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/devsecops', component: DevsecopsComponent },
  { path: 'products/compliance', component: ComplianceComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tropos', component: TroposComponent },
  { path: 'digital-transformation', component: DigitalTransformationComponent },
  { path: 'security-shield', component: SecurityShieldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
