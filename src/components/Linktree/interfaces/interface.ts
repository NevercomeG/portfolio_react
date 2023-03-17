export default function interfaces() {
  interface data {
    name: string;
    avatar: string;
    links: Link[];
    socials: social[];
    flechita?: boolean;
  }

  interface Link {
    href: string;
    title: string;
    image?: string;
    message: string;
    space?: boolean;
    flechita?: boolean;
  }

  interface social {
    href: string;
    title: string;
  }
}
