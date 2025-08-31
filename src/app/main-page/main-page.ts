import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { Skills } from "./skills/skills";
import { Projects } from "./projects/projects";

@Component({
  selector: 'app-main-page',
  imports: [Hero, AboutMe, Skills, Projects],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
