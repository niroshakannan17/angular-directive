import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  
  title = 'Directive Example';

  students_detail = [
    {name:"Shasha",subject:"English",marks:"85",result:"Pass"},
    {name:"Jotha",subject:"English",marks:"75",result:"Pass"},
    {name:"Srither",subject:"English",marks:"95",result:"Pass"},
    {name:"Jashmine",subject:"English",marks:"77",result:"Pass"},
    {name:"Anisha",subject:"English",marks:"65",result:"Pass"}
  ];
  

}
