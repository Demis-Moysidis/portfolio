import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

}
