import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../inbox/home/home.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

const routes: Routes = [{ path: '', component: HomeComponent, children:[
  {path:':id',component: EmailShowComponent},
  {path:'', component: PlaceholderComponent}] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
