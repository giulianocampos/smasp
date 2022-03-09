import { CreateCadastroComponent } from './components/cadastros/create-cadastro/create-cadastro.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { CreateComponent } from './components/solicitacoes/create/create.component';
import { MapeamentoComponent } from './components/mapeamento/mapeamento.component';
import { SolicitacoesComponent } from './components/solicitacoes/solicitacoes.component';
import { SuporteComponent } from './components/suporte/suporte.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'suporte', component: SuporteComponent},
  {path: 'mapeamento', component: MapeamentoComponent},
  {path: 'cadastros', component: CadastrosComponent},
  {path: 'cadastros/criar', component: CreateCadastroComponent},
  {path: 'solicitacoes', component: SolicitacoesComponent},
  {path: 'solicitacoes/criar', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
