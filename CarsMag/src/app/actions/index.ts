import {Action as NgrxAction} from '@ngrx/store';

export interface Action extends NgrxAction {
  payload?: any;
}


// https://api.vaetas.com/auth/login?email=101.prashant@gmail.com&password=
// Authorization: bearer TOKEN
// https://api.vaetas.com/me
// https://api.vaetas.com/projects
// https://api.vaetas.com/projects/:projectId/videos


// pivotaltracker.com

// Derek Banas design patterns youtube

// https://www.youtube.com/watch?v=8aGhZQkoFbQ
