import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuporteComponent } from './components/suporte/suporte.component';
import { SolicitacoesComponent } from './components/solicitacoes/solicitacoes.component';
import { HomeComponent } from './components/home/home.component';
import { MapeamentoComponent } from './components/mapeamento/mapeamento.component';
import { CreateComponent } from './components/solicitacoes/create/create.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { CreateCadastroComponent } from './components/cadastros/create-cadastro/create-cadastro.component';
import { DeleteCadastroComponent } from './components/cadastros/delete-cadastro/delete-cadastro.component';
import { DeleteSolicitacaoComponent } from './components/solicitacoes/delete-solicitacao/delete-solicitacao.component';

//imports necessários

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    SuporteComponent,
    SolicitacoesComponent,
    HomeComponent,
    MapeamentoComponent,
    CreateComponent,
    CadastrosComponent,
    CreateCadastroComponent,
    DeleteCadastroComponent,
    DeleteSolicitacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
