import { Component } from '@angular/core';
import { Course } from '../../components/course/course';
import { ListOfClasses } from '../../components/list-of-classes/list-of-classes';

@Component({
  selector: 'app-home',
  imports: [Course, ListOfClasses],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
