import { types } from 'mobx-state-tree';
import { graphqlOperation, API } from 'aws-amplify';
import { listRooms } from '../../graphql/queries';

const RoomModel = types.model('RoomModel', {
  id: types.string,
  title: types.optional(types.string, ''),
  description: types.optional(types.string, ''),
  image: types.optional(types.string, ''),
  type: types.optional(types.string, ''),
  bed: types.optional(types.number, 0),
  bedroom: types.optional(types.number, 0),
  oldPrice: types.optional(types.number, 0),
  newPrice: types.optional(types.number, 0),
});

export const RoomStore = types
  .model('RoomStore', {
    rooms: types.array(RoomModel),
    isLoading: types.optional(types.boolean, false),
  })
  .actions((store) => ({
    setLoading(newValue) {
      store.isLoading = newValue;
    },
    setRooms(newRooms) {
      store.rooms = newRooms;
    },
    async fetchRooms() {
      store.setLoading(true);
      try {
        const res = await API.graphql(graphqlOperation(listRooms));

        store.setRooms(res.data.listRooms.items);
      } catch (e) {
        console.warn(e);
      }
      store.setLoading(false);
    },
  }));
