import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { Information } from "./information/information";
import { Footer } from "../shared/footer/footer";

@Component({
  selector: 'app-privacy-policy',
  imports: [Hero, Information, Footer],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy {

}
