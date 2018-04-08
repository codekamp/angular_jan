import {ActionReducerMap, createSelector} from '@ngrx/store';
import {
  _getProjects, _getSelectedProjectId, _getSelectedProjectVideoIds, projectReducer,
  ProjectState
} from './projects';
import {_getVideoEntities, videoReducer, VideoState} from './videos';


export interface RootState {
  projects: ProjectState;
  videos: VideoState;
}

export const rootReducer: ActionReducerMap<RootState> = {
  projects: projectReducer,
  videos: videoReducer
};

export const getVideosState = (state: RootState) => state.videos;
export const getProjectState = (state: RootState) => state.projects;

// createSelector combines functions. If calls first n-1 functions and passes
// ... the output as parameter to nth function
// It should:
// 1. takes 2 or more functions in parameter
// 2. first n-1 functions should have same parameter type
// 3. nth function should take n-1 parameters
// 4. output function will have same parameter type as first n-1 functions
// 5. return type of output function will be same as return type of nth function
export const getProjects = createSelector(
  getProjectState,
  _getProjects
);







export const getSelectedProjectVideoIds = createSelector(
  getProjectState,
  _getSelectedProjectVideoIds
);

export const getVideoEntities = createSelector(
  getVideosState,
  _getVideoEntities
)

export const getSelecteProjectVideos = createSelector(
  getSelectedProjectVideoIds,
  getVideoEntities,
  (videoIds, videoEntities) => {
    return videoIds.map(id => videoEntities[id]);
  }
)


