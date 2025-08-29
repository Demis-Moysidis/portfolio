import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  currentPeelImg = '1';
  peel() {
    if(this.currentPeelImg == '1'){
      this.currentPeelImg = '2'
      setTimeout(()=>{
        this.currentPeelImg = '3'
      }, 200)
    }else{
      this.currentPeelImg = '1';
    }
  }

  skills = [
    {
      name: 'HTML',
      url: './icons/skills/HTML.svg'
    },
    {
      name: 'CSS',
      url: './icons/skills/CSS.svg'
    },
    {
      name: 'JavaScript',
      url: './icons/skills/Js.svg'
    },
    {
      name: 'TypeScript',
      url: './icons/skills/Ts.svg'
    },
    {
      name: 'Angular',
      url: './icons/skills/Angular.svg'
    },
        {
      name: 'Firebase',
      url: './icons/skills/Firebase.svg'
    },
    {
      name: 'Git',
      url: './icons/skills/Git.svg'
    },
    {
      name: 'REST-API',
      url: './icons/skills/Rest-Api.svg'
    },
    {
      name: 'Scrum',
      url: './icons/skills/Scrum.svg'
    },
    {
      name: 'Material\nDesign',
      url: './icons/skills/Material-Design.svg'
    }
  ]
}
