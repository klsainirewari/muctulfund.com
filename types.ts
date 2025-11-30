export interface Fund {
  name: string;
  category: string;
  return3yr: string;
  risk: string;
}

export interface Testimonial {
  name: string;
  location: string;
  comment: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: 'trending-up' | 'pie-chart' | 'shield' | 'dollar-sign';
}