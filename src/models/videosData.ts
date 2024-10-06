export interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  thumbnail: string;
}

export const videos: Video[] = [
  {
    id: 1,
    title: "😱 LA MAYOR ACTUALIZACION DE ARK SURVIVAL ASCENDED",
    description: "En este nuevo episodio de Aguilas Squad, cubrimos las últimas actualizaciones de ARK Survival Ascended de esta semana...",
    url: "https://www.youtube.com/watch?v=Cney2Gw3Yic",
    published_at: "2024-09-27",
    thumbnail: "https://i.ytimg.com/vi/Cney2Gw3Yic/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByfQIneXfjN6PkwoIBGVKYo4xkgw",
  },
  {
    id: 2,
    title: "SOBREVIVIENDO SIN DINOS EN ARK SURVIVAL ASCENDED ABERRATION",
    description: "¡Bienvenidos a Aguilas Squad! En este épico episodio, comenzamos la hazaña de sobrevivir sin dinos en ARK Ascend...",
    url: "https://www.youtube.com/watch?v=-07EF11zk8k&t",
    published_at: "2024-09-17",
    thumbnail: "https://i.ytimg.com/vi/-07EF11zk8k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBd42uwEiDI_Dh0kcqTLNBXXZIVvg",
  },
  {
    id: 3,
    title: "NOS ENFRENTAMOS AL MONO EN ALFA Y SOBREVIVIMOS EN ARK SVARTELFHEIM",
    description: "¡Bienvenidos a Aguilas Squad! En este épico episodio, continuamos la hazaña de sobrevivir 100 días en ARK Ascended Hardcore...",
    url: "https://www.youtube.com/watch?v=xV6eMODcPz0",
    published_at: "2024-08-30",
    thumbnail: "https://i.ytimg.com/vi/xV6eMODcPz0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHiQwlB1dGtaa6vDwrgmatAgnWUA",
  },
  // Añade más videos según sea necesario
];
