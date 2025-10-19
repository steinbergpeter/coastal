type Package = {
  title: string;
  price: string;
  description: string;
};
type Contact = {
  href: string;
  icon: React.ReactNode;
  children: string;
  target?: string;
  rel?: string;
};

type Service = {
  title: string;
  description: string;
};

export type { Package, Contact, Service };
