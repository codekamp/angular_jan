import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getSelectedVideos, RootState} from '../reducers/index';
import {ActivatedRoute} from '@angular/router';
import {Video} from '../models/video';
import {Subscription} from 'rxjs/Subscription';
import {ProjectSelectedAction} from '../actions/projects';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Video[];
  videoSubscription: Subscription;

  constructor(private store: Store<RootState>, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.store.select(getSelectedVideos).subscribe(videos => this.videos = videos);

    this.route.params.subscribe(params => {
      const projectId = params['projectId'];
      this.store.dispatch(new ProjectSelectedAction(projectId));
      // if (this.videoSubscription) {
      //   this.videoSubscription.unsubscribe();
      // }
      //

      //
      // this.videoSubscription = this.store.select((state: RootState) => {
      //   return getVideos(state, projectId);
      // }).subscribe(videos => this.videos = videos);
    });
  }
}
