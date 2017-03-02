import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StartComponent } from './components/start/start.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'start',  component: StartComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'portfolio',     component: PortfolioComponent  },
  { path: 'dashboard',     component: DashboardComponent  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ProfileComponent,
    StartComponent,
    DashboardComponent,
    LoginComponent,
    SidenavbarComponent,
    TopnavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
