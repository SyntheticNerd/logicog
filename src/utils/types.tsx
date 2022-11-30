export interface Style {
  title: string;
  images: string[];
  color: string;
  quantity: number;
}

export interface Product {
  title: string;
  price: string;
  description: string;
  category: string;
  styles: Style[];
  powerDelivery: string;
  weight: string;
  height: string;
  width: string;
  depth: string;
  warranty: string;
  primarySpecs: string[];
  technicalSpecs: string[];
  tracking: string[];
  requirements: string[];
  platforms: string[];
  inBox: string[];
}