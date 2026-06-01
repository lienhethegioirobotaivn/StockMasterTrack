import { LucideProps } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface LucideIconProps extends Omit<LucideProps, "ref"> {
  name: string;
}

const toKebabCase = (str: string) =>
  str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[_\s]+/g, "-")
    .toLowerCase();

export function LucideIcon({ name, ...props }: LucideIconProps) {
  const formattedName = toKebabCase(name) as keyof typeof dynamicIconImports;

  const isValid = formattedName in dynamicIconImports;
  const iconKey = isValid ? formattedName : "circle";

  return <DynamicIcon name={iconKey} {...props} />;
}
