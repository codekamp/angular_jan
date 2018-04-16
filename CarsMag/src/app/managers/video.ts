import {Store} from '@ngrx/store';
import {
  getSelectedProjectId,
  getSelectedVideos,
  RootState,
  selectedVideosLoaded,
  selectedVideosLoading
} from '../reducers/index';
import {InvidzService} from '../services/invidz';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Video} from '../models/video';
import {ProjectVideosLoadedAction, ProjectVideosLoadingAction} from '../actions/video';
import {debounceTime} from 'rxjs/operator/debounceTime';

@Injectable()
export class VideoManager {
  constructor(private store: Store<RootState>, private apiService: InvidzService) {
  }

  getSelectedVideos(): [Observable<Video>, Observable<boolean>] {
    const selectedProjectId$ = this.store.select(getSelectedProjectId);
    const loading$ = this.store.select(selectedVideosLoading);
    const loaded$ = this.store.select(selectedVideosLoaded);
    const videos$ = this.store.select(getSelectedVideos);

    const something$ = loading$.take(1);


    selectedProjectId$.subscribe(projectId => {
      loading$.combineLatest(loaded$, (loading, loaded) => loading || loaded)
        debounceTime(50).take(1).filter(v => !v).subscribe(() => {
        this.store.dispatch(new ProjectVideosLoadingAction(projectId));
        this.apiService.loadVideos().subscribe(videos => {
          this.store.dispatch(new ProjectVideosLoadedAction({projectId: projectId, videos: videos}));
        });
      });
    });

    return [videos$, loading$];
  }
}
