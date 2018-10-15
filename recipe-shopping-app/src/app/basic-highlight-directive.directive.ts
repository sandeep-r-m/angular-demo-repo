import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBasicHighlightDirective]'
})
export class BasicHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'skyblue';

  @HostBinding('style.backgroundColor') backgroudColor: string = "transparent";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log("BasicHighlightDirective::constructor() called");
    console.log(elementRef);
    console.log(renderer);
  }

  ngOnInit(): void {
    console.log("BasicHighlightDirective::ngOnInit() called");

    //Not a better approach to access an element
    //this.elementRef.nativeElement.style.backgroundColor = 'skyblue';

    //Better Approach to access an element
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'skyblue');

    //Using HostBinding decorator
    //this.backgroudColor = 'skyblue';
    this.backgroudColor = this.defaultColor;

  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    //console.log("BasicHighlightDirective::mouseover() called");
    //console.log(eventData);

    //Using Renderer
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'skyblue');

    //Using HostBinding decorator
    //this.backgroudColor = 'skyblue';
    this.backgroudColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //console.log("BasicHighlightDirective::mouseleave() called");
    //console.log(eventData);

    //Using Renderer
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');

    //Using HostBinding decorator
    //this.backgroudColor = 'transparent';
    this.backgroudColor = this.defaultColor;
  }

}
