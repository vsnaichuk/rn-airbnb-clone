import { RoomStore } from './roomStore';

let _roomStore;
export const useRooms = () => {
  if (!_roomStore) {
    _roomStore = RoomStore.create({
      rooms: [],
    });
  }

  return _roomStore;
};
