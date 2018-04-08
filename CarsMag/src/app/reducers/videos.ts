import {Video} from '../models/video';
import {Action} from '../actions/index';
import {StoreUtil} from '../utils/store';
import {PROJECT_VIDEOS_LOADED} from '../actions/video';
import * as _ from 'lodash';

export interface VideoState {
  ids: number[];
  entities: { [id: string]: Video };
}

export const initialState: VideoState = {
  ids: [],
  entities: null
}

export function videoReducer(state: VideoState = initialState, action: Action) {
  switch (action.type) {
    case PROJECT_VIDEOS_LOADED: {
      const videos = action.payload.videos;
      const ids = videos.map(p => p.id);
      const entities = StoreUtil.normalize(videos);
      const allIds = _.uniq([...state.ids, ...ids]);

      return {
        ...state,
        ids: allIds,
        entities: {...state.entities, ...entities}
      };
    }
    default:
      return state;
  }
}

export const _getVideoEntities = (state: VideoState) => state.entities;
