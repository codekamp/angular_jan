import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Video} from '../models/video';
import {Subscription} from 'rxjs/Subscription';
import {ProjectManager} from '../managers/project';
import {VideoManager} from '../managers/video';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit, OnDestroy {

  videos: Video[];
  videoSubscription: Subscription;
  alive$ = new Subject<boolean>();

  constructor(private projectManager: ProjectManager, private videoManager: VideoManager, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectManager.selectProject(params['projectId']);
    });


    const videos$ = this.videoManager.getSelectedVideos(this.alive$);
    videos$[0].takeUntil(this.alive$).subscribe(videos => this.videos = videos);
  }

  ngOnDestroy() {
    this.alive$.next(false);
    this.alive$.unsubscribe();
  }
}
