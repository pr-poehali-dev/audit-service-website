export interface FormData {
  name: string;
  contact: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TargetPoint {
  text: string;
  highlight?: boolean;
}

export interface ResultItem {
  title: string;
  description: string;
}
