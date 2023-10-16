import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-page-learn',
  templateUrl: './page-learn.component.html',
  styleUrls: ['./page-learn.component.scss']
})
export class PageLearnComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  seeValue: boolean = false

  click: boolean = false

  newText: string

  texts: any = []

  title: string = "Wellcome to learning page"
  title2:string
  title3:string

  nInc: number =  0
  hInc: number =  0

  publicValue()
  {
    this.click = true
    if(this.click === true)
    {
      this.texts.push(this.newText)
      console.log(this.texts);
    }
    this.newText = ''
  }

  remover(text: any)
  {
    const index = this.texts.indexOf(text)
    if(index !== text)
    {
      this.texts.splice(index, 1)
    }
  }

  increment()
  {
    this.nInc++ 

    if(this.hInc <= 0 || this.hInc > 0)
    {
      this.hInc --
    }
  }

  unIncrement()
  {
    this.nInc--
    if(this.nInc >= 0 || this.nInc < 0)
    {
      this.hInc ++
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = " Here you can increment and decrement those value and increased the bars below"

      this.title2 = "Here you can add and remove any value you submit"

      this.title3 = "Testing some LifeCycle Hooks"
    }, 5000);
  }

  public txt: string

  public valor: number = 1

  public destroy: boolean = true

  public add(): number{
    return this.valor += 1
  }

  constructor(){ }

  public destroyComponent()
  { 
    window.confirm("You really want to destroy your component")

    if(confirm("Destroy?"))
    {
      this.txt = "You destroyed him!!"
      this.destroy = false
    } else
    {
      this.txt = "You saved him!!"
      this.destroy = true
    }
  }

  ngOnDestroy(): void {  }

  ngAfterViewChecked(): void {  }

  ngAfterViewInit(): void {   }

  ngAfterContentChecked(): void {  }

  ngAfterContentInit(): void {  }

  ngDoCheck(): void {  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }

}
