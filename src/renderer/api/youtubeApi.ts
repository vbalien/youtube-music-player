import { ipcRenderer } from "electron";

export interface YoutubeVideo {
  videoId: string;
  title: string;
  author: string;
  lengthSeconds: string;
  thumbnail: string;
}

export async function getVideoInfo(videoId: string): Promise<YoutubeVideo> {
  return await ipcRenderer.invoke("get-youtube-info", videoId);
}

export async function getVideoUrl(videoId: string): Promise<string> {
  return await ipcRenderer.invoke("get-youtube-mp4", videoId);
}
