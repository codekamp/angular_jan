import {Project} from '../models/project';
import {Action} from '../actions/index';
import * as _ from 'lodash';

import {
  PROJECT_SELECTED,
  PROJECTS_ADDED,
  PROJECTS_DELETED,
  PROJECTS_LOADED, PROJECTS_LOADING,
  PROJECTS_NEXT_PAGE_LOADED,
  PROJECTS_UPDATED
} from '../actions/projects';
import {StoreUtil} from '../utils/store';
import {PROJECT_VIDEOS_LOADED, PROJECT_VIDEOS_LOADING} from '../actions/video';


export interface ProjectState {
  ids: number[];
  entities: { [projectId: string]: Project };
  videos: { [projectId: string]: number[] };
  videosLoading: { [projectId: string]: boolean };
  videosLoaded: { [projectId: string]: boolean };
  selected: number;
  loading: boolean;
  loaded: boolean;
}

export const initialState: ProjectState = {
  ids: [],
  entities: null,
  videos: null,
  videosLoading: null,
  videosLoaded: null,
  selected: null,
  loading: false,
  loaded: false
};

export function projectReducer(state: ProjectState = initialState, action: Action) {
  switch (action.type) {
    case PROJECTS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case PROJECTS_LOADED: {
      const projects = action.payload;
      const ids = projects.map(p => p.id);
      const entities = StoreUtil.normalize(projects);

      return {
        ...state,
        ids: ids,
        entities: entities,
        loading: false,
        loaded: true
      };
    }
    case PROJECTS_NEXT_PAGE_LOADED: {
      const projects = action.payload;
      const ids = projects.map(p => p.id);
      const entities = StoreUtil.normalize(projects);
      const allIds = _.uniq([...state.ids, ...ids]);

      return {
        ...state,
        ids: allIds,
        entities: {...state.entities, ...entities}
      };
    }
    case PROJECTS_ADDED: {
      const project = action.payload;
      const allIds = _.uniq([...state.ids, project.id]);

      return {
        ...state,
        ids: allIds,
        entities: {...state.entities, [project.id]: project}
      };
    }

    case PROJECTS_UPDATED: {
      const project = action.payload;

      return {
        ...state,
        entities: {...state.entities, [project.id]: project}
      };
    }

    case PROJECTS_DELETED: {
      const projectId = action.payload;

      const restOfIds = state.ids.filter(id => id !== projectId);
      const newEntities = {...state.entities};
      delete newEntities[projectId];
      return {
        ...state,
        ids: restOfIds,
        entities: newEntities
      };
    }
    case PROJECT_VIDEOS_LOADING: {
      const projectId = action.payload;

      return {
        ...state,
        videosLoading: {...state.videosLoading, [projectId]: true}
      };
    }
    case PROJECT_VIDEOS_LOADED: {
      const projectId = action.payload.projectId;
      const videoIds = action.payload.videos.map(v => v.id);

      return {
        ...state,
        videos: {...state.videos, [projectId]: videoIds},
        videosLoading: {...state.videosLoading, [projectId]: false},
        videosLoaded: {...state.videosLoaded, [projectId]: true}
      };
    }

    case PROJECT_SELECTED: {
      return {
        ...state,
        selected: action.payload
      };
    }
    default:
      return state;
  }
}


export const _getProjects = (state: ProjectState) => state.ids.map(id => state.entities[id]);
export const _getSelectedProjectId = (state: ProjectState) => state.selected;

// use createSelector here
export const _getSelectedProject = (state: ProjectState) => state.entities[state.selected];
export const _getSelectedProjectVideoIds = (state: ProjectState) => state.videos[state.selected] || [];

export const _getVideoIds = (state: ProjectState, projectId: number) => {
  return state.videos[projectId];
};

export const _projectsLoaded = (state: ProjectState) => state.loaded;
export const _projectsLoading = (state: ProjectState) => state.loading;
export const _selectedVideosLoading = (state: ProjectState) => state.videosLoading[state.selected];
export const _selectedVideosLoaded = (state: ProjectState) => state.videosLoaded[state.selected];


