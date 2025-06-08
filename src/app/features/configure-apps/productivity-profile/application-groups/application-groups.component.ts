import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ApplicationGroup {
  name: string;
  idleTimeConfig: string;
  isProductive: boolean | null; // null for empty state
}

@Component({
  selector: 'app-application-groups',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './application-groups.component.html',
  styleUrl: './application-groups.component.scss'
})
export class ApplicationGroupsComponent {
  searchTerm: string = '';
  showModal: boolean = false;
  selectedGroup: ApplicationGroup | null = null;
  selectedIdleConfig: string = 'Default';
  
  applicationGroups: ApplicationGroup[] = [
    { name: 'Education', idleTimeConfig: 'No Idle Time', isProductive: true },
    { name: 'Email', idleTimeConfig: '5 Minutes', isProductive: true },
    { name: 'Entertainment', idleTimeConfig: 'Default', isProductive: false },
    { name: 'fds', idleTimeConfig: 'Default', isProductive: null },
    { name: 'Marketing', idleTimeConfig: 'Default', isProductive: true },
    { name: 'News', idleTimeConfig: 'Custom', isProductive: true },
    { name: 'Office apps', idleTimeConfig: 'Default', isProductive: false },
    { name: 'others', idleTimeConfig: 'Default', isProductive: false },
    { name: 'Communication', idleTimeConfig: 'Default', isProductive: true }
  ];

  idleConfigOptions = [
    { value: 'Default', label: 'Default' },
    { value: 'No Idle Time', label: 'No Idle Time' },
    { value: 'Custom', label: 'Custom' }
  ];

  get filteredGroups(): ApplicationGroup[] {
    return this.applicationGroups.filter(group =>
      group.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openEditModal(group: ApplicationGroup): void {
    this.selectedGroup = { ...group };
    this.selectedIdleConfig = group.idleTimeConfig;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedGroup = null;
  }

  updateIdleConfig(): void {
    if (this.selectedGroup) {
      const index = this.applicationGroups.findIndex(g => g.name === this.selectedGroup!.name);
      if (index !== -1) {
        this.applicationGroups[index].idleTimeConfig = this.selectedIdleConfig;
      }
    }
    this.closeModal();
  }

  setProductivity(group: ApplicationGroup, value: boolean): void {
    if (group.isProductive === value) {
      // If clicking the same button, unselect it (set to null)
      group.isProductive = null;
    } else {
      // Otherwise, select the clicked option
      group.isProductive = value;
    }
  }

  getProductiveButtonClass(group: ApplicationGroup): string {
    if (group.isProductive === true) {
      return 'bg-green-500 text-white';
    }
    return 'bg-gray-200 text-gray-700 hover:bg-gray-300';
  }

  getNonProductiveButtonClass(group: ApplicationGroup): string {
    if (group.isProductive === false) {
      return 'bg-orange-500 text-white';
    }
    return 'bg-gray-200 text-gray-700 hover:bg-gray-300';
  }
}