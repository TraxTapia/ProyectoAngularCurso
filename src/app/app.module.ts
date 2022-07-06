import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateComponent } from './crudUsuarios/create/create.component';
import { ListComponent } from './crudUsuarios/list/list.component';
import { DeleteComponent } from './crudUsuarios/delete/delete.component';
import { UpdateComponent } from './crudUsuarios/update/update.component';
import { FormularioUsersComponent } from './crudUsuarios/formulario-users/formulario-users.component';
import { FiltroUsuariosComponent } from './crudUsuarios/filtro-usuarios/filtro-usuarios.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
const router: Routes = [
  {
    path: 'Users',
    component: UsuariosComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    MenuComponent,
    PeliculasComponent,
    LandingPageComponent,
    CreateComponent,
    ListComponent,
    DeleteComponent,
    UpdateComponent,
    FormularioUsersComponent,
    FiltroUsuariosComponent,
    InputImgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(router),
    DataTablesModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
