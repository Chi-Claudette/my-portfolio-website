import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      name: 'Project 1',
      description: 'Description of project 1',
      link: 'https://github.com/yourprofile/project1'
    },
    {
      name: 'Project 2',
      description: 'Description of project 2',
      link: 'https://github.com/yourprofile/project2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
