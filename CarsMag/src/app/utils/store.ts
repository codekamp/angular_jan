export class StoreUtil {
  static normalize = (entities: Entity[]) => {
    return entities.reduce((previous, e) => {
      previous[e.id] = e;
      return previous;
    }, {});
  }
}

export interface Entity {
  id: number;
}
