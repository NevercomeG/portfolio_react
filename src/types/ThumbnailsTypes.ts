// ThumbnailsTypes.ts
export interface thumbnail {
  id: number;
  imageUrl: string;
}

export interface thumbnails {
  thumbnails: thumbnail[];
  showAllThumbnails : boolean;

}
