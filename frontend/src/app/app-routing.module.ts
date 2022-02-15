import { SolicitacoesComponent } from './components/solicitacoes/solicitacoes.component';
import { SuporteComponent } from './components/suporte/suporte.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'suporte', component: SuporteComponent},
  {path: 'solicitacoes', component: SolicitacoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
