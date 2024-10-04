export interface IServiceCardProps {
  title: string;
  description: string;
  price: number;
  duration: { title: string; durationInMinutes: number; value: string };
}
