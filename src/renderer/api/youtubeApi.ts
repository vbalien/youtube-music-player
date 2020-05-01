import ytdl from "ytdl-core";

export interface YoutubeVideo {
  videoId: string;
  title: string;
  author: string;
  lengthSeconds: string;
  thumbnail: string;
}

export async function getVideoInfo(videoId: string): Promise<YoutubeVideo> {
  const info = await ytdl.getBasicInfo(videoId);
  return {
    videoId: info.video_id,
    title: info.title,
    author: info.author.name,
    lengthSeconds: info.length_seconds,
    thumbnail: info.player_response.videoDetails.thumbnail.thumbnails.slice(
      -1
    )[0].url,
  };
}

export async function getVideoUrl(videoId: string): Promise<string> {
  const info = await ytdl.getInfo(videoId);
  return info.formats[0].url;
}
