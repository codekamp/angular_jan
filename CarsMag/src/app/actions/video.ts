import {Project} from '../models/project';
import {Action} from './index';
import {Video} from '../models/video';

export const PROJECT_VIDEOS_LOADED = '[Project] [Videos] loaded';


export class ProjectVideosLoadedAction implements Action {
  readonly type = PROJECT_VIDEOS_LOADED

  constructor(public payload: {projectId: number, videos: Video[]}) {

  }
}
