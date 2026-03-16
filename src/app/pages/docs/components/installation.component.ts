import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class InstallationComponent {
  step1Code = `git clone https://github.com/mathsukamura/startail-admin.git`
  step2Code = `cd startail-admin`
  step3Code = `npm install`
  step4Code = `ng serve`
}
