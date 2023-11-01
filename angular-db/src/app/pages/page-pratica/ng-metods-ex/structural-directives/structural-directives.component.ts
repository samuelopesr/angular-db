import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
      if (this.disable === false) {
        this.disable = true;
      } else {
        this.disable = false;
      }
    }, 5000);
  }

  disable = false;
  alteration = "it's an image alteration";
  url =
    'https://t.ctcdn.com.br/Pp8AcSBhklh28T5N1v1HYG5esJ4=/768x432/smart/i257652.jpeg';

  fontSize = '2em';
  color = '#ff0000';
  opacity = '0.7';

  font = 16

  styles = {
    fontSize: '2em',
    color: 'blue',
    opacity: '0.4',
  };

  valentines = 'valentine-class text-bold bg-primary';
  cdate() {
    const date = new Date();
    return date.toLocaleDateString();
  }
}
