import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-badge-doc',
  templateUrl: './badge-doc.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class BadgeDocComponent {
  exampleCode = `<span class="inline-flex items-center rounded-full
  bg-primary px-2.5 py-0.5 text-xs font-medium
  text-primary-foreground">
  Primary
</span>

<span class="inline-flex items-center rounded-full border
  border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5
  text-xs font-medium text-emerald-600
  dark:text-emerald-400">
  Success
</span>`
}
