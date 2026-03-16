import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-modal-doc',
  templateUrl: './modal-doc.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class ModalDocComponent {
  isOpen = false

  exampleCode = `<button (click)="openModal()"
  class="... bg-primary text-primary-foreground ...">
  Abrir Modal
</button>

@if (isOpen) {
  <div class="fixed inset-0 z-50 flex items-center
    justify-center bg-background/80 backdrop-blur-sm">
    <div class="w-full max-w-md rounded-lg border
      border-border bg-card shadow-lg">
      <div class="border-b border-border px-6 py-4">
        <h3 class="text-sm font-semibold">Titulo</h3>
      </div>
      <div class="px-6 py-4">Conteudo</div>
      <div class="border-t border-border px-6 py-3">
        <button (click)="closeModal()">Fechar</button>
      </div>
    </div>
  </div>
}`

  openModal() {
    this.isOpen = true
  }

  closeModal() {
    this.isOpen = false
  }
}
