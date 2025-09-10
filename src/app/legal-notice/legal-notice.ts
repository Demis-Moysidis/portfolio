import { Component } from '@angular/core';
import { Footer } from "../shared/footer/footer";
import { Hero } from "./hero/hero";
import { Information } from "./information/information";
import { Header } from '../shared/header/header';

@Component({
  selector: 'app-legal-notice',
  imports: [Footer, Hero, Information, Header],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {

}
