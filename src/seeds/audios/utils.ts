export const createAudioKey = (audioId: string, fileName: string): string => {
  return `audios/${audioId}/${fileName}`;
};
