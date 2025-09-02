import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { Skills } from "./skills/skills";
import { Projects } from "./projects/projects";
import { ColleaguesThoughts } from "./colleagues-thoughts/colleagues-thoughts";

@Component({
  selector: 'app-main-page',
  imports: [Hero, AboutMe, Skills, Projects, ColleaguesThoughts],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
