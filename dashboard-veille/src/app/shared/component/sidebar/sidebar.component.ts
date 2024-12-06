import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isExpanded = true;
  isMobile = false;

  menuItems = [
    { label: 'Accueil', route: '/home', icon: '🏠' },
    { label: 'Tendances', route: '/trend', icon: '📈' },
    { label: 'Niches', route: '/niche',   icon: '💡' },
    { label: 'Sources', route: '/information', icon: '📚' },
    { label: 'Réseaux sociaux', route: '/social', icon: '🌐' },
    { label: 'Domaines', route: '/domain', icon: '🔗' },
    { label: 'Alertes', route: '/alert', icon: '🔔' },
    { label: 'Statistiques', route: '/statistic', icon: '📊' },
  ];

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;  
    if (this.isMobile) {
      this.isExpanded = false;
    }
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
