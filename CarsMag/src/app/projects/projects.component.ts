import { Component, OnInit } from '@angular/core';
import {ProjectsRepository} from '../repositories/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsRepo: ProjectsRepository) { }

  ngOnInit() {
    const projects$ = this.projectsRepo.getProjects();

    projects$[0].subscribe(projects => this.projects = projects);
    projects$[1].subscribe(loading => this.loading = loading);
  }

}
