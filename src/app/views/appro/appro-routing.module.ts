import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApproComponent } from './appro.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
import { AjouterCategorieComponent } from './ajouter-categorie/ajouter-categorie.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { NouvelApprovisionnementComponent } from './nouvel-approvisionnement/nouvel-approvisionnement.component';


const routes: Routes = [
  {
    path: '',
    component: ApproComponent
  },
  {
    path: 'ajouter-article',
    component: AjouterArticleComponent
  },
  {
    path: 'modifier-article',
    component: ModifierArticleComponent
  },
  {
    path: 'ajouter-categorie',
    component: AjouterCategorieComponent
  },
  {
    path: 'modifier-categorie',
    component: ModifierCategorieComponent
  },
  {
    path: 'nouvel-approvisionnement',
    component: NouvelApprovisionnementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApproRoutingModule { }
