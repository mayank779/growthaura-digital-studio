import { Laptop, LineChart, Megaphone, Target, Mail, Palette } from "lucide-react";

type IconResolverProps = {
  name: string;
  className?: string;
};

const iconMap = {
  Laptop,
  LineChart,
  Megaphone,
  Target,
  Mail,
  Palette
};

export function IconResolver({ name, className }: IconResolverProps) {
  const Icon = iconMap[name as keyof typeof iconMap] ?? Laptop;
  return <Icon className={className} aria-hidden="true" />;
}
