import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-table-doc',
  templateUrl: './table-doc.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class TableDocComponent {
  exampleCode = `<div class="overflow-x-auto rounded-lg border border-border">
  <table class="w-full text-sm">
    <thead>
      <tr class="border-b border-border bg-muted/50">
        <th class="px-4 py-3 text-left text-xs
          font-medium text-muted-foreground">Nome</th>
        <th class="...">Email</th>
        <th class="...">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-border
        hover:bg-muted/50">
        <td class="px-4 py-3 font-medium
          text-foreground">Ana Silva</td>
        <td class="px-4 py-3
          text-muted-foreground">ana@email.com</td>
        <td class="px-4 py-3">
          <span class="... bg-emerald-500/10
            text-emerald-600">Ativo</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`
}
