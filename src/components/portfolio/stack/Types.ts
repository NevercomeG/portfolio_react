export interface StackData {
  title: string;
  mainImage: string;
  mainImageAlt: string;
  mainImagePosition: 'left' | 'right';
  icons: IconData[];
  detailedSkills: string[];
}

export interface IconData {
  iconsrc: string;
  classname: string;
  color: string;
  position: 'Upper' | 'Lower';
}
