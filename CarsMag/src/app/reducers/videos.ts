import {Video} from '../models/video';
import {Action} from '../actions/index';
import {PROJECT_VIDEOS_LOADED} from '../actions/video';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

// export interface VideoState {
//   ids: number[];
//   entities: { [id: number]: Video };
// }

export declare type VideoState = EntityState<Video>;

export const videoEntityAdapter = createEntityAdapter<Video>({
  selectId: video => video.id
});

export const initialState: VideoState = {
  ids: [],
  entities: null
};


export function videoReducer(state: VideoState = initialState, action: Action) {
  switch (action.type) {
    case PROJECT_VIDEOS_LOADED: {
      const videos = action.payload.videos;

      return videoEntityAdapter.addAll(action.payload.videos, state);
      // const ids = videos.map(p => p.id);
      // const entities = StoreUtil.normalize(videos);
      // const allIds = _.uniq([...state.ids, ...ids]);
      //
      // return {
      //   ...state,
      //   ids: allIds,
      //   entities: {...state.entities, ...entities}
      // };
    }
    default:
      const videoId: number = action.payload.id;
      const videoTitle: string = action.payload.title;
      return videoEntityAdapter.updateOne({id: videoId, changes: {title: videoTitle}}, state);
      return state;
  }
}

export const _getVideoEntities = (state: VideoState) => state.entities;
