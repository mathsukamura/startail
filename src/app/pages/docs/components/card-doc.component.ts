import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-card-doc',
  templateUrl: './card-doc.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class CardDocComponent {
  exampleCode = `<div class="rounded-lg border border-border bg-card">
  <div class="border-b border-border px-6 py-4">
    <h3 class="text-sm font-semibold text-foreground">
      Titulo do Card
    </h3>
    <p class="mt-1 text-xs text-muted-foreground">
      Descricao breve.
    </p>
  </div>
  <div class="px-6 py-4">
    <p class="text-sm text-muted-foreground">
      Conteudo do card.
    </p>
  </div>
  <div class="flex items-center justify-end gap-2
    border-t border-border px-6 py-3">
    <button class="...">Cancelar</button>
    <button class="...">Salvar</button>
  </div>
</div>`
}
