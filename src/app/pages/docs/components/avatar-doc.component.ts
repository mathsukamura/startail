import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-avatar-doc',
  templateUrl: './avatar-doc.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class AvatarDocComponent {
  exampleCode = `<div class="flex size-10 items-center justify-center
  rounded-full bg-primary text-sm font-medium
  text-primary-foreground">
  AB
</div>

<div class="relative">
  <div class="flex size-10 items-center justify-center
    rounded-full bg-primary text-sm font-medium
    text-primary-foreground">AB</div>
  <span class="absolute bottom-0 right-0 size-2.5
    rounded-full border-2 border-card
    bg-emerald-500"></span>
</div>`
}
