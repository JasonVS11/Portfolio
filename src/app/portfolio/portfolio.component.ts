import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  iconname="../../assets/icons/menubar.svg";
  checkicon=true
  changeicon(value:any) {
    this.iconname=!this.checkicon?'../../assets/icons/menubar.svg':'../../assets/icons/closeicon.svg';
    this.checkicon=!value;
  }
}
