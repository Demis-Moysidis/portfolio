import { Component } from '@angular/core';
import { Footer } from "../shared/footer/footer";
import { Hero } from "./hero/hero";
import { Information } from "./information/information";

@Component({
  selector: 'app-legal-notice',
  imports: [Footer, Hero, Information],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {

}
