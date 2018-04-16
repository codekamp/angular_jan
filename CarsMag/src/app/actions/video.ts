import {Action} from './index';
import {Video} from '../models/video';

export const PROJECT_VIDEOS_LOADING = '[Project] [Videos] loading';
export const PROJECT_VIDEOS_LOADED = '[Project] [Videos] loaded';


export class ProjectVideosLoadingAction implements Action {
  readonly type = PROJECT_VIDEOS_LOADING;

  // payload is projectId
  constructor(public payload: number) {

  }
}

export class ProjectVideosLoadedAction implements Action {
  readonly type = PROJECT_VIDEOS_LOADED;

  constructor(public payload: {projectId: number, videos: Video[]}) {

  }
}
