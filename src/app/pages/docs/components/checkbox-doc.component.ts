import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-checkbox-doc',
  templateUrl: './checkbox-doc.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class CheckboxDocComponent {
  exampleCode = `<label class="flex items-center gap-3 cursor-pointer">
  <input type="checkbox"
    class="size-4 rounded border-input accent-primary" />
  <span class="text-sm text-foreground">Label</span>
</label>

<label class="flex items-start gap-3 cursor-pointer">
  <input type="checkbox"
    class="mt-0.5 size-4 rounded border-input
    accent-primary" />
  <div>
    <span class="text-sm font-medium
      text-foreground">Titulo</span>
    <p class="text-xs text-muted-foreground">
      Descricao.
    </p>
  </div>
</label>

<label class="... cursor-not-allowed opacity-50">
  <input type="checkbox" disabled ... />
  <span class="text-sm
    text-muted-foreground">Desabilitado</span>
</label>`
}
