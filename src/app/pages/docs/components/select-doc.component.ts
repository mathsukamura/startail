import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-select-doc',
  templateUrl: './select-doc.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class SelectDocComponent {
  exampleCode = `<label class="mb-1.5 block text-sm font-medium
  text-foreground">Pais</label>
<select class="flex h-9 w-full items-center rounded-md
  border border-input bg-background px-3 py-1 text-sm
  text-foreground shadow-sm
  focus-visible:outline-none focus-visible:ring-1
  focus-visible:ring-ring">
  <option value="" disabled selected>
    Selecione um pais
  </option>
  <option value="br">Brasil</option>
  <option value="us">Estados Unidos</option>
</select>`
}
