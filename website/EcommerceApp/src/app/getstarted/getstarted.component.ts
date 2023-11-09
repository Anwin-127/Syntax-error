import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {

    const signUpButton = this.el.nativeElement.querySelector('#signUp');
    const signInButton = this.el.nativeElement.querySelector('#signIn');
    const container = this.el.nativeElement.querySelector('#container');


    this.renderer.listen(signUpButton, 'click', () => {
      this.renderer.addClass(container, 'right-panel-active');
    });

    this.renderer.listen(signInButton, 'click', () => {
      this.renderer.removeClass(container, 'right-panel-active');
    });
  }
}
