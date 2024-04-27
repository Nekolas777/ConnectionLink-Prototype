import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarContentComponent} from "./public/components/toolbar-content/toolbar-content.component";
import {SidebarContentComponent} from "./public/components/sidebar-content/sidebar-content.component";
import {NgIf} from "@angular/common";
import {ForumContentComponent} from "./pages/forums/components/forum-content/forum-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarContentComponent, SidebarContentComponent, NgIf, ForumContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'connectionlink-appweb';
  isSidebarOpen: boolean = false;

  constructor() {
    this.updateSidebarStatus();
  }

  ngOnInit() {
    window.addEventListener('resize', this.updateSidebarStatus.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.updateSidebarStatus.bind(this));
  }

  onToggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log(this.isSidebarOpen);
  }

  updateSidebarStatus() {
    this.isSidebarOpen = window.matchMedia('(min-width: 1024px)').matches;
  }
}
