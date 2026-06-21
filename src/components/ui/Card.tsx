type Props = {
  title: string;
  children: React.ReactNode;
};

function Card({ title, children }: Props) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
}

export default Card;