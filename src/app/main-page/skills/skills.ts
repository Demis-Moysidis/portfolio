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
      url: './icon/skills/HTML.svg'
    },
    {
      name: 'CSS',
      url: './icon/skills/CSS.svg'
    },
    {
      name: 'JavaScript',
      url: './icon/skills/Js.svg'
    },
    {
      name: 'TypeScript',
      url: './icon/skills/Ts.svg'
    },
    {
      name: 'Angular',
      url: './icon/skills/Angular.svg'
    },
        {
      name: 'Firebase',
      url: './icon/skills/Firebase.svg'
    },
    {
      name: 'Git',
      url: './icon/skills/Git.svg'
    },
    {
      name: 'REST-API',
      url: './icon/skills/Rest-Api.svg'
    },
    {
      name: 'Scrum',
      url: './icon/skills/Scrum.svg'
    },
    {
      name: 'Material\nDesign',
      url: './icon/skills/Material-Design.svg'
    }
  ]
}
