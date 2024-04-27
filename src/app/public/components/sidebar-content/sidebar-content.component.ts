import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-sidebar-content',
  standalone: true,
  imports: [
    MatIcon,
    NgIf,
    NgClass
  ],
  templateUrl: './sidebar-content.component.html',
  styleUrl: './sidebar-content.component.css'
})
export class SidebarContentComponent {

  @Input() isSidebarOpen!: boolean;

}
