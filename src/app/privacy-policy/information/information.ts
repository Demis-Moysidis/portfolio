import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-information',
  imports: [TranslatePipe],
  templateUrl: './information.html',
  styleUrl: './information.scss'
})
export class Information {

}
