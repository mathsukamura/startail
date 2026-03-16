import { Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  host: { class: 'block' },
})
export class HomeComponent implements AfterViewInit {
  isDark = false

  @ViewChild('heroTitle') heroTitle!: ElementRef
  @ViewChild('heroDesc') heroDesc!: ElementRef
  @ViewChild('heroCta') heroCta!: ElementRef
  @ViewChild('heroImage') heroImage!: ElementRef
  @ViewChildren('featureCard') featureCards!: QueryList<ElementRef>
  @ViewChildren('techItem') techItems!: QueryList<ElementRef>
  @ViewChild('previewImage') previewImage!: ElementRef

  private isBrowser: boolean

  features = [
    {
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1',
      title: 'Dashboard Completo',
      description: 'Painel com metricas, graficos e KPIs prontos para uso em qualquer projeto.',
    },
    {
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
      title: '50+ Componentes',
      description: 'Biblioteca extensa de componentes reutilizaveis com suporte a temas claro e escuro.',
    },
    {
      icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
      title: 'Totalmente Customizavel',
      description: 'Tailwind CSS v4 com variaveis semanticas. Mude cores, tipografia e espacamentos facilmente.',
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Autenticacao Integrada',
      description: 'Sistema de login, registro e recuperacao de senha ja implementados e prontos.',
    },
    {
      icon: 'M4 6h16M4 10h16M4 14h16M4 18h16',
      title: 'Tabelas & Data Tables',
      description: 'Tabelas com ordenacao, filtros, paginacao e acoes em lote configuráveis.',
    },
    {
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      title: 'Tema Claro & Escuro',
      description: 'Alternancia suave entre temas com persistencia automatica da preferencia do usuario.',
    },
  ]

  techStack = [
    { name: 'Angular 19', description: 'Framework principal', icon: 'angular' },
    { name: 'TypeScript', description: 'Tipagem estatica', icon: 'typescript' },
    { name: 'Tailwind CSS v4', description: 'Estilizacao utilitaria', icon: 'tailwind' },
    { name: 'GSAP', description: 'Animacoes fluidas', icon: 'gsap' },
    { name: 'ApexCharts', description: 'Graficos interativos', icon: 'apexcharts' },
    { name: 'Lucide Icons', description: 'Icones modernos', icon: 'lucide' },
  ]

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId)
    if (this.isBrowser) {
      this.isDark = document.documentElement.classList.contains('dark')
    }
  }

  async ngAfterViewInit() {
    if (!this.isBrowser) return

    const gsap = (await import('gsap')).default
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(this.heroTitle.nativeElement, { y: 60, opacity: 0, duration: 1 })
      .from(this.heroDesc.nativeElement, { y: 40, opacity: 0, duration: 0.8 }, '-=0.5')
      .from(this.heroCta.nativeElement, { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
      .from(this.heroImage.nativeElement, { y: 80, opacity: 0, scale: 0.95, duration: 1 }, '-=0.3')

    this.featureCards.forEach((card, i) => {
      gsap.from(card.nativeElement, {
        scrollTrigger: { trigger: card.nativeElement, start: 'top 85%', toggleActions: 'play none none none' },
        y: 50, opacity: 0, duration: 0.6, delay: i * 0.1,
      })
    })

    this.techItems.forEach((item, i) => {
      gsap.from(item.nativeElement, {
        scrollTrigger: { trigger: item.nativeElement, start: 'top 90%', toggleActions: 'play none none none' },
        x: -30, opacity: 0, duration: 0.5, delay: i * 0.08,
      })
    })

    if (this.previewImage) {
      gsap.to(this.previewImage.nativeElement, {
        scrollTrigger: { trigger: this.previewImage.nativeElement, start: 'top bottom', end: 'bottom top', scrub: 1 },
        y: -40,
      })
    }
  }
}
