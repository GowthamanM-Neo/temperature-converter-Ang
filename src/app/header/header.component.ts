import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  display='';
  ngOnInit(): void {
  }
  onSubmit(value:string,check:string){
    if(check==='option1'){
      this.display=((Number(value)-32)*(5/9)).toFixed(2)+'°C';
      return this.display;
    }
    else{
      this.display=((Number(value)*(9/5))+32).toFixed(2)+'°F';
      return this.display;
    }
  }
}
