import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-alert-doc',
  templateUrl: './alert-doc.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class AlertDocComponent {
  exampleCode = `<div class="flex items-start gap-3 rounded-lg border
  border-emerald-500/20 bg-emerald-500/5 p-4">
  <svg class="mt-0.5 shrink-0 text-emerald-500" ...>...</svg>
  <div>
    <p class="text-sm font-medium text-foreground">Sucesso</p>
    <p class="mt-1 text-xs text-muted-foreground">Mensagem aqui.</p>
  </div>
</div>

<div class="flex items-start gap-3 rounded-lg border
  border-red-500/20 bg-red-500/5 p-4">
  ...
</div>

<div class="flex items-start gap-3 rounded-lg border
  border-amber-500/20 bg-amber-500/5 p-4">
  ...
</div>

<div class="flex items-start gap-3 rounded-lg border
  border-blue-500/20 bg-blue-500/5 p-4">
  ...
</div>`
}
