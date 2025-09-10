import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { Information } from "./information/information";
import { Footer } from "../shared/footer/footer";
import { Header } from '../shared/header/header';

@Component({
  selector: 'app-privacy-policy',
  imports: [Hero, Information, Footer, Header],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy {

}
