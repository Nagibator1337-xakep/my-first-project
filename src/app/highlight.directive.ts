import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private li: ElementRef) { }

  @Input() appHighlight='';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.li.nativeElement.style.backgroundColor = color;
  }
  
}