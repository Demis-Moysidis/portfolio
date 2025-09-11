import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  projects: Project[] = [
    {
      id: 1,
      title: "project.join.title",
      description: 'project.join.description',
      implementation: 'project.join.implementation',
      duration: 'project.join.duration',
      technologies: [
        {
          img: './icon/skills/CSS.svg',
          name: 'CSS'
        },
        {
          img: './icon/skills/HTML.svg',
          name: 'HTML'
        },
        {
          img: './icon/skills/Firebase.svg',
          name: 'Firebase'
        },
        {
          img: './icon/skills/Angular.svg',
          name: 'Angular'
        },
        {
          img: './icon/skills/Ts.svg',
          name: 'TypeScript'
        }
    ],
      img: './img/04_Projects/join.jpg',
      round_img: './img/03_Stickers/00_Round/08_ Color option 3 - C.png',
      round_text_top: 'project.join.round-text-top',
      round_text_bottom: 'project.join.round-text-bottom',
      github: false,
      live_test: false,
      in_progress: true
    },
    {
      id: 2,
      title: "project.epl.title",
      description: 'project.epl.description',
      implementation: 'project.epl.implementation',
      duration: 'project.epl.duration',
      technologies: [
        {
          img: './icon/skills/Js.svg',
          name: 'JavaScript'
        },
        {
          img: './icon/skills/HTML.svg',
          name: 'HTML'
        },
        {
          img: './icon/skills/CSS.svg',
          name: 'CSS'
        }
    ],
      img: './img/04_Projects/Pollo.png',
      round_img: './img/03_Stickers/00_Round/05_ Color option 2 - C.png',
      round_text_top: 'project.epl.round-text-top',
      round_text_bottom: 'project.epl.round-text-bottom',
      github: true,
      live_test: true,
      round_black: true,
      github_link: 'https://github.com/Demis-Moysidis/el_pollo_loco',
      live_test_link: 'https://el-pollo-loco.demis-moysidis.com'
    },
    {
      id: 3,
      title: "project.pokedex.title",
      description: 'project.pokedex.description',
      implementation: 'project.pokedex.implementation',
      duration: 'project.pokedex.duration',
      technologies: [
        {
          img: './icon/skills/Js.svg',
          name: 'JavaScript'
        },
        {
          img: './icon/skills/HTML.svg',
          name: 'HTML'
        },
        {
          img: './icon/skills/CSS.svg',
          name: 'CSS'
        }
    ],
      img: './img/04_Projects/pokedex.png',
      round_img: './img/03_Stickers/00_Round/05_ Color option 2 - C.png',
      round_text_top: 'project.pokedex.round-text-top',
      round_text_bottom: 'project.pokedex.round-text-bottom',
      github: true,
      live_test: true,
      round_black: true,
      github_link: 'https://github.com/Demis-Moysidis/pokedex',
      live_test_link: 'https://pokedex.demis-moysidis.com'
    }
  ]

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) {
    return this.projects.find(p => p.id === id);
  }
}
