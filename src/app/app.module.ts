import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { OnePetComponent } from './one-pet/one-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PetsService } from './pets.service';

const appRoutes: Routes = [
  {path: '', component: AllPetsComponent },
  {path: 'create', component: AddPetComponent},
  {path: ':id', component: OnePetComponent},
  {path: ':id/edit', component: EditPetComponent}
  // {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    AllPetsComponent,
    OnePetComponent,
    EditPetComponent,
    AddPetComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [PetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
