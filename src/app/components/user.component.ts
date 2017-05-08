import { Component } from '@angular/core';
import {PostService} from '../services/posts.service'

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostService]
})

export class UserComponent  {
  name: string;
  lastName: string;
  address: addressInterface;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostService) {
    this.name = "Tony";
    this.showHobbies = false;
    this.address = {
      street: 'test',
      city: 're'
    }
    this.hobbies = ["cars", "boxing"];

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
}

interface addressInterface {
  street: string,
  city: string
}

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}
