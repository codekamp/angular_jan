import {Store} from '@ngrx/store';
import {getProjects, projectsLoaded, projectsLoading, RootState} from '../reducers/index';
import {InvidzService} from '../services/invidz';
import {Injectable} from '@angular/core';
import {Project} from '../models/project';
import {Observable} from 'rxjs/Observable';
import {ProjectSelectedAction} from '../actions/projects';

@Injectable()
export class ProjectManager {
  constructor(private store: Store<RootState>, private apiService: InvidzService) {
  }

  getProjects(): [Observable<Project[]>, Observable<boolean>] {
    const loading$ = this.store.select(projectsLoading);
    const loaded$ = this.store.select(projectsLoaded);
    const projects$ = this.store.select(getProjects);

    loading$.combineLatest(loaded$, (loading, loaded) => loading || loaded)
      .take(1).filter(v => !v).subscribe(() => {
      // this.store.dispatch(new ProjectsLoadingAction());
      // this.apiService.loadProjects().subscribe(projects => {
      //   this.store.dispatch(new ProjectsLoadedAction(projects));
      // });
    });

    return [projects$, loading$];
  }

  selectProject(id: number) {
    this.store.dispatch(new ProjectSelectedAction(id));
  }
}
