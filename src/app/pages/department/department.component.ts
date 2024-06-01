import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

  department =[
    {
      id:1,
      title:"ggdgd",
      img:"../../../assets/aircraft.jpg",
      desc:"u3hd2hdh2hhedh2b efggf efb3 erfvver834hfbf  "
    }
  ]
}
