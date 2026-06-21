type Props = {
  children: React.ReactNode;
  variant?: "success" | "warning" | "error" | "neutral";
};

function Badge({ children, variant = "neutral" }: Props) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}

export default Badge;