export interface Project {
  title: string;
  period: string;
  github: string;
  demo: string;
  pages: Page[];
}

export interface Page {
  name: string;
  tasks: string[];
  images: string;
}
