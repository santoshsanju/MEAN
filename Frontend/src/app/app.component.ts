import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Post from '../Models/post';
import { PostServiceService } from '../service/post-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  postList: Post[] = [];
  constructor(private postService: PostServiceService) { }
  ngOnInit(): void {
    this.postService.getPost().subscribe(data => this.postList = data);
  }
}
