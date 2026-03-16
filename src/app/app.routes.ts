import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'docs',
    loadComponent: () =>
      import('./pages/docs/docs-layout.component').then(
        (m) => m.DocsLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'introduction', pathMatch: 'full' },
      {
        path: 'introduction',
        loadComponent: () =>
          import('./pages/docs/components/introduction.component').then(
            (m) => m.IntroductionComponent
          ),
      },
      {
        path: 'installation',
        loadComponent: () =>
          import('./pages/docs/components/installation.component').then(
            (m) => m.InstallationComponent
          ),
      },
      {
        path: 'alert',
        loadComponent: () =>
          import('./pages/docs/components/alert-doc.component').then(
            (m) => m.AlertDocComponent
          ),
      },
      {
        path: 'badge',
        loadComponent: () =>
          import('./pages/docs/components/badge-doc.component').then(
            (m) => m.BadgeDocComponent
          ),
      },
      {
        path: 'button',
        loadComponent: () =>
          import('./pages/docs/components/button-doc.component').then(
            (m) => m.ButtonDocComponent
          ),
      },
      {
        path: 'avatar',
        loadComponent: () =>
          import('./pages/docs/components/avatar-doc.component').then(
            (m) => m.AvatarDocComponent
          ),
      },
      {
        path: 'card',
        loadComponent: () =>
          import('./pages/docs/components/card-doc.component').then(
            (m) => m.CardDocComponent
          ),
      },
      {
        path: 'modal',
        loadComponent: () =>
          import('./pages/docs/components/modal-doc.component').then(
            (m) => m.ModalDocComponent
          ),
      },
      {
        path: 'table',
        loadComponent: () =>
          import('./pages/docs/components/table-doc.component').then(
            (m) => m.TableDocComponent
          ),
      },
      {
        path: 'input',
        loadComponent: () =>
          import('./pages/docs/components/input-doc.component').then(
            (m) => m.InputDocComponent
          ),
      },
      {
        path: 'checkbox',
        loadComponent: () =>
          import('./pages/docs/components/checkbox-doc.component').then(
            (m) => m.CheckboxDocComponent
          ),
      },
      {
        path: 'select',
        loadComponent: () =>
          import('./pages/docs/components/select-doc.component').then(
            (m) => m.SelectDocComponent
          ),
      },
      {
        path: 'switch',
        loadComponent: () =>
          import('./pages/docs/components/switch-doc.component').then(
            (m) => m.SwitchDocComponent
          ),
      },
    ],
  },
]
