import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  // para obtener los datos desde el html
  @ViewChild( CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  personas = Array(1000).fill(0); // fill para llenar de ceros el array
  constructor() { }

  ngOnInit(): void {
    // console.log(this.personas);
  }

  irFinal(){
    this.viewport.scrollToIndex( this.personas.length);
  }
  irMitad(){
    this.viewport.scrollToIndex( this.personas.length / 2 );
  }
  irInicio(){
    this.viewport.scrollToIndex( 0 );
  }

}
