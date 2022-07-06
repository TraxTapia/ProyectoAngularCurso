import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CreateComponent } from './crudUsuarios/create/create.component';
import { ListComponent } from './crudUsuarios/list/list.component';
import { UpdateComponent } from './crudUsuarios/update/update.component';
import { FiltroUsuariosComponent } from './crudUsuarios/filtro-usuarios/filtro-usuarios.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'createUsers', component: CreateComponent },
  { path: 'listUsers', component: ListComponent },
  { path: 'updateUser', component: UpdateComponent },
  { path: 'users', component: UsuariosComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'filtro/Users', component: FiltroUsuariosComponent },
  // { path: 'landing', component: LandingPageComponent },
  // { path: 'landing', component: LandingPageComponent },
  // { path: 'landing', component: LandingPageComponent },
  // { path: 'landing', component: LandingPageComponent },
  // { path: 'landing', component: LandingPageComponent },
  { path: '**', redirectTo: 'landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
