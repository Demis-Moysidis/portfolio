import { Component, inject } from '@angular/core';
import { ProjectsDataService } from '../services/projects-data-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Project } from '../interfaces/project';
import { TranslatePipe } from '@ngx-translate/core';
import { NgClass, NgStyle } from '@angular/common';
import { Header } from '../shared/header/header';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, TranslatePipe, NgClass, Header, NgStyle],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss'
})
export class ProjectDetail {
  projectsService = inject(ProjectsDataService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  id?: number;
  projectData?: Project;
  allPorjects?: Project[];
  
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.projectData = this.projectsService.getProjectById(this.id);
    });
    
    this.allPorjects = this.projectsService.getProjects();
  }

  nextProject(){
    let nextProjectId = (this.id! + 1) % (this.allPorjects!.length + 1);
    if(nextProjectId == 0){
      nextProjectId = 1;
    }
    this.router.navigate(['/project', nextProjectId])
  }
  
}
