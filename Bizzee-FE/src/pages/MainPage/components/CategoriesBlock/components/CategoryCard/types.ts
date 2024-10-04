export interface CategoryCardProps {
  category: {
    value: string;
    title: string;
    image: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >;
  };
  onClick: (category: string) => void;
  activeCategory: string;
}
