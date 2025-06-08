import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface ProductivityProfile {
  name: string;
  isDefault: boolean;
}

@Component({
  selector: 'app-productivity-profile',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './productivity-profile.component.html',
  styleUrl: './productivity-profile.component.scss'
})
export class ProductivityProfileComponent {
  // Data properties
  profiles: ProductivityProfile[] = [
    { name: 'Default', isDefault: true },
  ];
  
  filteredProfiles: ProductivityProfile[] = [...this.profiles];
  searchTerm: string = '';
  
  // Modal properties
  showAddEditModal: boolean = false;
  showDeleteModal: boolean = false;
  isEditMode: boolean = false;
  profileName: string = '';
  showNameError: boolean = false;
  
  // Editing properties
  editingIndex: number = -1;
  deletingIndex: number = -1;
  
  // Search functionality
  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredProfiles = [...this.profiles];
    } else {
      this.filteredProfiles = this.profiles.filter(profile =>
        profile.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  
  // Add modal methods
  openAddModal(): void {
    this.isEditMode = false;
    this.profileName = '';
    this.showNameError = false;
    this.showAddEditModal = true;
  }
  
  // Edit modal methods
  openEditModal(profile: ProductivityProfile, index: number): void {
    this.isEditMode = true;
    this.profileName = profile.name;
    this.editingIndex = index;
    this.showNameError = false;
    this.showAddEditModal = true;
  }
  
  // Delete modal methods
  openDeleteModal(profile: ProductivityProfile, index: number): void {
    this.deletingIndex = index;
    this.showDeleteModal = true;
  }
  
  // Close modals
  closeAddEditModal(): void {
    this.showAddEditModal = false;
    this.profileName = '';
    this.showNameError = false;
    this.isEditMode = false;
    this.editingIndex = -1;
  }
  
  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.deletingIndex = -1;
  }
  
  // Save profile (Add or Edit)
  saveProfile(): void {
    // Validation
    if (!this.profileName.trim()) {
      this.showNameError = true;
      return;
    }
    
    // Check for duplicate names (excluding current profile when editing)
    const isDuplicate = this.profiles.some((profile, index) => {
      if (this.isEditMode && index === this.editingIndex) {
        return false; // Skip current profile when editing
      }
      return profile.name.toLowerCase() === this.profileName.trim().toLowerCase();
    });
    
    if (isDuplicate) {
      this.showNameError = true;
      return;
    }
    
    if (this.isEditMode) {
      // Update existing profile
      this.profiles[this.editingIndex].name = this.profileName.trim();
    } else {
      // Add new profile
      const newProfile: ProductivityProfile = {
        name: this.profileName.trim(),
        isDefault: false
      };
      this.profiles.push(newProfile);
    }
    
    // Update filtered profiles and close modal
    this.onSearch(); // Refresh the filtered list
    this.closeAddEditModal();
  }
  
  // Delete profile
  deleteProfile(): void {
    if (this.deletingIndex >= 0) {
      // Don't allow deleting the default profile
      if (this.profiles[this.deletingIndex].isDefault) {
        alert('Cannot delete the default profile');
        this.closeDeleteModal();
        return;
      }
      
      this.profiles.splice(this.deletingIndex, 1);
      this.onSearch(); // Refresh the filtered list
    }
    this.closeDeleteModal();
  }
}