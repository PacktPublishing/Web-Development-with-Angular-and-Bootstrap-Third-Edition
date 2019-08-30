import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialFormComponent } from './material-form/material-form.component';
import { MaterialNavigationComponent } from './material-navigation/material-navigation.component';
import { MaterialCardsComponent } from './material-cards/material-cards.component';
import { MaterialLayoutComponent } from './material-layout/material-layout.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { MaterialModalsComponent } from './material-modals/material-modals.component';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { BootstrapMaterialComboComponent } from './bootstrap-material-combo/bootstrap-material-combo.component';
import {IssueListComponent} from './issue-list/issue-list.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
const routes: Routes = [
  { path: 'material-forms', component: MaterialFormComponent },
  { path: 'material-tables', component: IssueListComponent },
  { path: 'material-cards', component: MaterialCardsComponent},
  { path: 'material-layouts', component: MaterialLayoutComponent},
  { path: 'material-modals', component: MaterialModalsComponent },
  { path: 'material-buttons', component: MaterialButtonsComponent },
  { path: 'material-navigation', component: MaterialNavigationComponent },
  { path: 'my-menu', component: MyMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
