import {Project} from '../models/project';
import {Action} from './index';

export const PROJECTS_LOADING = '[Project] loading';
export const PROJECTS_LOADED = '[Project] loaded';
export const PROJECTS_NEXT_PAGE_LOADED = '[Project] next page loaded';
export const PROJECTS_DELETED = '[Project] delete';
export const PROJECTS_ADDED = '[Project] added';
export const PROJECTS_UPDATED = '[Project] updated';
export const PROJECT_SELECTED = '[Project] selected';


export class ProjectsLoadingAction implements Action {
  readonly type = PROJECTS_LOADING;
}

export class ProjectsLoadedAction implements Action {
  readonly type = PROJECTS_LOADED;

  constructor(public payload: Project[]) {

  }
}

export class ProjectsNextPageLoadedAction implements Action {
  readonly type = PROJECTS_NEXT_PAGE_LOADED;

  constructor(public payload: Project[]) {

  }
}


export class ProjectsDeletedAction implements Action {
  readonly type = PROJECTS_DELETED;

  // payload is project's id
  constructor(public payload: number) {

  }
}

export class ProjectUpdatedAction implements Action {
  readonly type = PROJECTS_UPDATED;

  constructor(public payload: Project) {

  }
}

export class ProjectAddedAction implements Action {
  readonly type = PROJECTS_ADDED;

  constructor(public payload: Project) {

  }
}

export class ProjectSelectedAction implements Action {
  readonly type = PROJECT_SELECTED;

  constructor(public payload: number) {

  }
}
