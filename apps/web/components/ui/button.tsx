import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

export function Button({
  children,
  href,
  type = "button",
  onClick,
  className = ""
}: ButtonProps) {
  const style =
    "inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-semibold text-slate-950 transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  if (href) {
    return (
      <a href={href} className={`${style} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${style} ${className}`}>
      {children}
    </button>
  );
}
