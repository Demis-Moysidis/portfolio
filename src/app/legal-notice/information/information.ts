import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-information',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './information.html',
  styleUrl: './information.scss'
})
export class Information {

}
