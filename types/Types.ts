export type NavItemType = {
  name: string;
  link: string;
  icon?: React.ReactElement;
};

export type GridItemType = {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
};

export type ProjectType = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
};

export type TestimonialType = {
  quote: string;
  name: string;
  title: string;
};

export type CompanyType = {
  id: number;
  name: string;
  img: string;
  nameImg: string;
};

export type WorkExperienceType = {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
};

export type SocialMediaType = {
  id: number;
  img: string;
  url: string;
};
