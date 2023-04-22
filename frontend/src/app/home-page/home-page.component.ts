import { Component } from '@angular/core';
import { PostService } from './post.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  post = {
    nombre:"",
    adress:"",
    phone:"",
    email:"",
    website:"",
    logo:"",
    facebooklink:"",
    twitterlink:"",
    instagramlink:"",
    linkedinlink:"",
    youtubelink:""
  };

  constructor(private postService: PostService) { }

  onSubmit() {
    this.postService.createPost(this.post).subscribe(response => {
      console.log(response);
    });
  }
}
