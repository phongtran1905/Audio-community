import { music } from '@seeds/categories/music/data';
import * as path from 'path';
import { avicii } from '@seeds/users/avicii/data';
import { createAudioKey } from '../utils';

export const waitingForLove = {
  id: '830e6691-74d0-4be7-acf6-9645c67670d7',
  image: createAudioKey(
    '830e6691-74d0-4be7-acf6-9645c67670d7',
    '9f0126e894a6211a4e1bfa826f5ff6d5.jpg',
  ),
  sound: createAudioKey(
    '830e6691-74d0-4be7-acf6-9645c67670d7',
    '9f0126e894a6211a4e1bfa826f5ff6d5.mp3',
  ),
  name: 'Waiting for love',
  description: null,
  listens: 589000000,
  userId: avicii.id,
  categoryId: music.id,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const waitingForLoveImagePath = path.join(
  __dirname,
  'waiting-for-love.jpg',
);

export const waitingForLoveSoundPath = path.join(
  __dirname,
  'waiting-for-love.mp3',
);
