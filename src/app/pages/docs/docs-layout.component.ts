import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

interface NavItem {
  label: string
  slug: string
}

interface NavGroup {
  title: string
  items: NavItem[]
}

@Component({
  selector: 'app-docs-layout',
  imports: [RouterModule],
  templateUrl: './docs-layout.component.html',
  host: { class: 'block' },
})
export class DocsLayoutComponent {
  sidebarOpen = false

  navGroups: NavGroup[] = [
    {
      title: 'Primeiros Passos',
      items: [
        { label: 'Introducao', slug: 'introduction' },
        { label: 'Instalacao', slug: 'installation' },
      ],
    },
    {
      title: 'Componentes',
      items: [
        { label: 'Alert', slug: 'alert' },
        { label: 'Avatar', slug: 'avatar' },
        { label: 'Badge', slug: 'badge' },
        { label: 'Button', slug: 'button' },
        { label: 'Card', slug: 'card' },
        { label: 'Modal', slug: 'modal' },
        { label: 'Table', slug: 'table' },
      ],
    },
    {
      title: 'Formularios',
      items: [
        { label: 'Input', slug: 'input' },
        { label: 'Checkbox', slug: 'checkbox' },
        { label: 'Select', slug: 'select' },
        { label: 'Switch', slug: 'switch' },
      ],
    },
  ]

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen
  }

  closeSidebar() {
    this.sidebarOpen = false
  }
}
