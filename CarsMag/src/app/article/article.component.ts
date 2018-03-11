import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articleId: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('ArticleComponent constructor');
  }

  ngOnInit() {
   this.route.params.subscribe(p => {
      this.articleId = +p['xyz'];
    });
  }

  onNext() {
    this.router.navigate(['article', this.articleId + 1]);
  }

  login() {
    this.router.navigate(['login']);
  }
}
