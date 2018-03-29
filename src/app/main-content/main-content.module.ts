import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import {HomepageComponent} from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainContentComponent, HomepageComponent, AboutUsComponent, LoginComponent, SignUpComponent, ProfileComponent]
})
export class MainContentModule { }
