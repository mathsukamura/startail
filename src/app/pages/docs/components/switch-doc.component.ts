import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-switch-doc',
  templateUrl: './switch-doc.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class SwitchDocComponent {
  switch1 = false
  switch2 = true
  switch3 = true

  exampleCode = `<button
  (click)="toggle()"
  [class]="isOn
    ? '... bg-primary ...'
    : '... bg-input ...'"
  role="switch"
  [attr.aria-checked]="isOn">
  <span
    [class]="isOn
      ? '... translate-x-4'
      : '... translate-x-0'">
  </span>
</button>

<div class="flex items-center justify-between">
  <div>
    <p class="text-sm font-medium
      text-foreground">Label</p>
    <p class="text-xs
      text-muted-foreground">Descricao</p>
  </div>
  <button ...>...</button>
</div>`

  toggle(name: string) {
    switch (name) {
      case 'switch1':
        this.switch1 = !this.switch1
        break
      case 'switch2':
        this.switch2 = !this.switch2
        break
      case 'switch3':
        this.switch3 = !this.switch3
        break
    }
  }
}
