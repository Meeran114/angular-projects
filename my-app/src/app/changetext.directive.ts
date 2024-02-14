import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Directive, ElementRef } from '@angular/core';
import { compileNgModule } from '@angular/core/src/render3/jit/module';

@Directive({
  selector: '[appChangetext]'
})
export class ChangetextDirective {

  constructor(Elementb : ElementRef) { 
    console.log(Elementb);
    Elementb.nativeElement.innerText = "This text has been changed using Change Text directive ";
  }

}