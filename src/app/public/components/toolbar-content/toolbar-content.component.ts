import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatCardAvatar, MatCardHeader, MatCardImage} from "@angular/material/card";

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatCardAvatar,
    MatCardImage,
    MatCardHeader
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

  @Output() toggleSidebar = new EventEmitter<void>();

}
