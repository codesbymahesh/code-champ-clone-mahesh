import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configure-apps',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule],  templateUrl: './configure-apps.component.html',
  styleUrl: './configure-apps.component.scss'
})
export class ConfigureAppsComponent {

}
