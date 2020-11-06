import { Component, OnInit } from '@angular/core';
import { PostservService } from '../services/postserv.service';
import { Observable } from 'rxjs';
import { post } from './post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts

  itYangilik() {
    this.postservice.getPostByCategory('it').subscribe((data) => {
      this.posts = data
    })
  }

  iqtisodiy() {
    this.postservice.getPostByCategory('iqtisodiyot').subscribe((data) => {
      this.posts = data
    })
  };

  jahon() {
    this.postservice.getPostByCategory('jahon').subscribe((data) => {
      this.posts = data
    })
  };

  texnologiya() {
    this.postservice.getPostByCategory('texnologiya').subscribe((data) => {
      this.posts = data
    })
  };

  kirish() {
    this.router.navigate(['login']);
  }
  constructor(public postservice: PostservService, public router: Router) { }

  ngOnInit() {
   this.postservice.getPosts().subscribe((data) => {
      this.posts = data
    });
  }

}
