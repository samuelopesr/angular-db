import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  
  public name: string = "Denilson"
  public age: number = 29
  public imgSrc: string = "https://assets-blog.hostgator.com.br/wp-content/uploads/2021/03/o-que-e-o-angular-1.webp"
  public imgTitle: string = "Propriety Binding"

  
  public alerta(value: MouseEvent) { 
    console.log(value);
  }
  
  
  public position: {x: number, y: number} = {x: 0, y: 0}
  
  public box: any
  public context: CanvasRenderingContext2D
  public isDrawing: boolean = false
  public y: number = 0
  public x: number = 0

  @ViewChild('canvas')
  canvas: ElementRef
  

  public mouseDownDraw(ev: MouseEvent)
  {
    console.log("mousedown working");
    
    this.x = ev.offsetX
    this.y = ev.offsetY
    this.isDrawing = true
  }

  public mouseMoveDraw(ev: MouseEvent)
  {
    if(this.isDrawing)
    {
      console.log("mouseMoveDraw working");
      this.drawLine(this.context, this.x, this.y, ev.offsetX, ev.offsetY);
      this.x = ev.offsetX
      this.y = ev.offsetY
    }
  }

  public mouseUpDraw(ev: MouseEvent)
  {
    if(this.isDrawing)
    {
      console.log("mouseUpDraw working");
      this.drawLine(this.context, this.x, this.y, ev.offsetX, ev.offsetY);
      this.x = 0
      this.y = 0
      this.isDrawing = false
    }
  }

  public drawLine(context: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number)
  {
    context.beginPath()
    context.strokeStyle = "black"
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
    console.log("everything working");
    
  }


  public mouseMoveTest(valor: MouseEvent)
  { 
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }


  public mouseenter(element: HTMLElement)
  {
  
    console.log("element before: " + element);
    
    
    if(element)
    {
      element.style.backgroundColor = "red"
      console.log("element after: " + element);
      console.log("entrou");
    }
  }
  
  public mouseleave(element: HTMLElement)
  {
    if(element)
    {
      element.style.backgroundColor = "#007BFF"
      console.log("saiu");
    }
  }

  public dragData: any
  
  public drag(val: DragEvent)
  {
    console.log("dragging"); 
  }

  public dragstart(val: DragEvent)
  {
    this.dragData = val.target
    console.log("already dragging");   
  }

  public dragend(val: DragEvent)
  {
    this.dragData = null
    console.log("dragend");  
  }

  public dragover(val: DragEvent)
  {
    val.preventDefault()
    console.log("dragover");
  }

  public drop(val: DragEvent)
  {   
    val.preventDefault()
    console.log("drop");

    if(this.dragData && val.target instanceof HTMLElement)
    {
      val.target.appendChild(this.dragData)
      this.dragData = null
    }
    
  }



  constructor(){}

  public checkedDisable: boolean = false

  ngOnInit(): void { 
  }

  ngAfterViewInit(): void{
    this.context = this.canvas.nativeElement.getContext('2d')
  }
}
