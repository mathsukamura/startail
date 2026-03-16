import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-button-doc',
  templateUrl: './button-doc.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class ButtonDocComponent {
  exampleCode = `<button class="inline-flex items-center justify-center
  rounded-md bg-primary px-4 py-2 text-sm font-medium
  text-primary-foreground hover:bg-primary/90">
  Default
</button>

<button class="inline-flex items-center justify-center
  rounded-md border border-input bg-background px-4 py-2
  text-sm font-medium text-foreground
  hover:bg-accent hover:text-accent-foreground">
  Outline
</button>

<button class="inline-flex items-center justify-center
  rounded-md bg-secondary px-4 py-2 text-sm font-medium
  text-secondary-foreground hover:bg-secondary/80">
  Secondary
</button>`
}
