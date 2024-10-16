// ThumbnailsTypes.ts
export interface VideoType {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  thumbnail: string;
}

export interface Videos {
  Videos: VideoType[];
  showAllVideos : boolean;
  hidebutton? : boolean;
  hidepagination? : boolean;
}


