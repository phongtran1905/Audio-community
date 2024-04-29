import { music } from '@seeds/categories/music/data';
import * as path from 'path';
import { avicii } from '@seeds/users/avicii/data';
import { createAudioKey } from '../utils';

export const heyBrother = {
  id: '79fd5456-c978-48bb-9ee5-04a414019cb6',
  image: createAudioKey(
    '79fd5456-c978-48bb-9ee5-04a414019cb6',
    'a8bc7d6798a48f7172906f945cd0157c.jpg',
  ),
  sound: createAudioKey(
    '79fd5456-c978-48bb-9ee5-04a414019cb6',
    'a8bc7d6798a48f7172906f945cd0157c.mp3',
  ),
  name: 'Hey brother',
  description: null,
  listens: 289000000,
  userId: avicii.id,
  categoryId: music.id,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const heyBrotherImagePath = path.join(__dirname, 'hey-brother.jpg');

export const heyBrotherSoundPath = path.join(__dirname, 'hey-brother.mp3');
