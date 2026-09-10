export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  ctaText: string;
  features: string[];
  category: 'solar' | 'cctv' | 'networking' | 'electrical' | 'smart_home' | 'earthing' | 'vfd_pump' | 'maintenance' | 'epc' | string;
  badge?: string;
  image?: string;
}

export interface ProductSpecRow {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'solar' | 'cctv' | 'networking' | 'photon-sunways' | 'electrical' | 'earthing' | 'vfd_pump' | 'maintenance' | 'epc' | string;
  categoryLabel: string;
  brand: string;
  shortDesc: string;
  keySpecs: string[];
  availability: 'In Stock' | 'Available for Projects' | 'Custom Order';
  tag?: string;
  imageUrl?: string;
  videoUrl?: string;
  isVideo?: boolean;
  gallery?: string[];
  specTable?: ProductSpecRow[];
}

export interface ProjectEnvironment {
  id: string;
  title: string;
  description: string;
  iconName: string;
  suitability: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface CartItem {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  brand: string;
  quantity: number;
  unit?: string;
  specs?: string[];
  type: 'product' | 'service';
}

export interface CartOrderData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  projectType: string;
  installationRequired: boolean;
  notes?: string;
}
