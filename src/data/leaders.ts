export interface Leader {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo?: string; // path to image in /public/images/team/...
}

export const LEADERS: Leader[] = [
  {
    id: "pradeep",
    name: "Kattamuri Pradeep",
    title: "Managing Director",
    photo: "/images/team/pradeep.jpg",
    bio: `Kattamuri Pradeep, the Founder and Managing Partner of Sree Pratish Infra LLP, is a visionary real estate developer...` // use full provided bio
  },
  {
    id: "satish",
    name: "Satish Chandra Behara",
    title: "Managing Director",
    photo: "/images/team/satish.jpg",
    bio: `Satish Chandra Behara is an experienced real estate professional and one of the Managing Directors...` // use the bio I wrote above
  }
];
