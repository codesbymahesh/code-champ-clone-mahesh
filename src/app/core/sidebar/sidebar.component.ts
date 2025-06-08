import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isCollapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();
  
  productivityExpanded = true; // Start expanded since we're in this section

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  toggleProductivity() {
    if (!this.isCollapsed) {
      this.productivityExpanded = !this.productivityExpanded;
    }
  }
}
