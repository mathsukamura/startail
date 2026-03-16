import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-input-doc',
  templateUrl: './input-doc.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class InputDocComponent {
  exampleCode = `<label class="mb-1.5 block text-sm font-medium
  text-foreground">Nome</label>
<input type="text" placeholder="Digite seu nome"
  class="flex h-9 w-full rounded-md border border-input
  bg-background px-3 py-1 text-sm text-foreground
  shadow-sm placeholder:text-muted-foreground
  focus-visible:outline-none focus-visible:ring-1
  focus-visible:ring-ring" />

<input type="password"
  class="... border-red-500
  focus-visible:ring-red-500" />
<p class="mt-1.5 text-xs text-red-500">
  Mensagem de erro.
</p>

<input type="text" disabled
  class="... bg-muted text-muted-foreground
  cursor-not-allowed opacity-50" />`
}
