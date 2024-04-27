import {Component, Input} from '@angular/core';
import {MatCardAvatar} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import forumPostEntity from "../../models/forum-post.entity";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    MatCardAvatar,
    MatIcon,
    NgForOf
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  @Input() posts: Array<forumPostEntity> = [];

}
