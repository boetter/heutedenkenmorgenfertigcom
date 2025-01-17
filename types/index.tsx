import { ReactNode } from "react";

// 1. Blogs
export type BlogsType = {
  id: string;
  author?: string;
  title: string;
  category: string;
  image: string;
  date: string;
  contentTitle?: string;
  content?: ReactNode;  // Hvis du vil bruge JSX i selve data
};

// 2. Companies
export type CompaniesType = {
  id: string;
  image: string;
};

// 3. Links (fx linksProject)
export type LinksType = {
  title: string;
  value: string;
  counter: number;
};

// 4. Projects
// Uddyber her for at rumme overview1..3, beskriv1..4, video, results, reviewAuthor og galleri (array af strenge)
export type ProjectsType = {
  id: string;
  client: string;
  title: string;
  image: string;
  categories: string[];
  year?: string;
  overview1?: string;
  overview2?: string;
  overview3?: string;
  beskriv1?: string;
  beskriv2?: string;
  beskriv3?: string;
  beskriv4?: string;
  video?: string;
  results?: {
    achievements?: string[];
    stats?: {
      value: string;
      description: string;
    }[];
  };
  reviewAuthor?: {
    avatar: string;
    man: string;
    position: string;
    content: string;
  };
  // Her er 'gallery' et array af strenge i dit eksempel
  gallery?: string[];
};

// 5. Reviews
export type ReviewsType = {
  id: string;
  author: string;
  position: string;
  avatar: string;
  content: string;
};

// 6. Services
// Bemærk her, at "gallery" i `services` er et array af objekter { image: string }.
// Vi laver derfor en separat type for at tydeliggøre det.
type ServiceDetail = {
  title: string;
  content: string;
};

type ServicePlans = {
  title: string;
  list: {
    title: string;
    content: string;
  }[];
};

type ServiceDescription = {
  title: string;
  content: string;
  buttonText: string;
  buttonLink: string;
};

type ServiceGalleryItem = {
  image: string;
};

export type ServicesType = {
  id: string;
  title: string;
  subtitle?: string;
  kortforklaring?: string;
  info?: string;
  image?: string;
  buttonText?: string;
  detailsHead?: string;
  detailsDesc?: string;
  buttonLink?: string;
  details?: ServiceDetail[];
  plans?: ServicePlans;
  description?: ServiceDescription;
  gallery?: ServiceGalleryItem[];
  video?: string;
  previewImage?: string;
};

// 7. Team
// Socials defineret særskilt (ikon + url), og så brugt i TeamType
type SocialsType = {
  icon: string;
  url: string;
};

export type TeamType = {
  id: string;
  title: string;
  position: string;
  photo: string;
  description?: string;
  socials: SocialsType[];
};