import {Campaign} from '../models/campaign';
import {Video} from '../models/video';

export interface CampaignState {
  ids: number[];
  entities: { [campaignId: string]: Campaign };
  videos: {[campaignId: string]: number[]};
}
