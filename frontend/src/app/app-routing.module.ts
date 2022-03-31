import { DeleteSolicitacaoComponent } from './components/solicitacoes/delete-solicitacao/delete-solicitacao.component';
import { DeleteCadastroComponent } from './components/cadastros/delete-cadastro/delete-cadastro.component';
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
  { path: '', component: HomeComponent },
  { path: 'suporte', component: SuporteComponent },
  { path: 'mapeamento', component: MapeamentoComponent },

  {
    path: 'cadastros',
    children: [
      { path: '', component: CadastrosComponent },
      { path: 'criar', component: CreateCadastroComponent },
      { path: 'delete/:id', component: DeleteCadastroComponent },
    ],
  },

  {
    path: 'solicitacoes',
    children: [
      { path: '', component: SolicitacoesComponent },
      { path: 'criar', component: CreateComponent },
      { path: 'delete/:id', component: DeleteSolicitacaoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
