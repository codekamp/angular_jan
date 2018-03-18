import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventBus} from '../services/event-bus.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  articleId: number;

  constructor(private route: ActivatedRoute, private router: Router, private eventBus: EventBus) {
    console.log('ArticleComponent constructor');
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.articleId = +p['xyz'];
    });

    const query = this.route.queryParams.subscribe(qp => {
      const a = qp['search'];
    });
  }

  onNext() {
    this.eventBus.emit('articleChanged', this.articleId + 1)
    this.router.navigate(['article', this.articleId + 1]);
  }

  login() {
    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    console.log('Article component destroyed');
  }
}
