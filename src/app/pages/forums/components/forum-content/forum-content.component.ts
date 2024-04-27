import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatFabButton} from "@angular/material/button";
import {MatCardAvatar} from "@angular/material/card";
import ForumPostEntity from "../../models/forum-post.entity";
import {ForumApiService} from "../../services/forum-api.service";
import {PostListComponent} from "../post-list/post-list.component";
import {NewpostModalComponent} from "../newpost-modal/newpost-modal.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-forum-content',
  standalone: true,
  imports: [
    MatIcon,
    MatFabButton,
    MatCardAvatar,
    PostListComponent,
    NewpostModalComponent,
    NgIf
  ],
  templateUrl: './forum-content.component.html',
  styleUrl: './forum-content.component.css'
})
export class ForumContentComponent implements OnInit {

  posts: Array<ForumPostEntity> = [];
  showNewPostModal: boolean = false;

  constructor(private forumPostApi: ForumApiService) {
  }

  // este metodo se ejecutara cuando se monte el componente
  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.forumPostApi.getPosts().subscribe(
      (response: any) => {
        this.posts = response.map((item: ForumPostEntity) => {
          return new ForumPostEntity(
           item.id,
           item.name,
           item.email,
           item.subject,
           item.description,
           item.profile_img,
           item.publication_date,
           item.likes_quantity,
           item.comments_quantity
          )
        });
        console.log(this.posts);
      });
  }

  toggleNewPostModal() {
    this.showNewPostModal = !this.showNewPostModal;
  }

}
