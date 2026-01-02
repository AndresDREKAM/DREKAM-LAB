
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  isFeatured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  color: 'primary' | 'accent';
}
