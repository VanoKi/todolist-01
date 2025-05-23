type Props = {
  title: string
  onClick?: () => void
  className?: string
};
export const Button = (props: Props) => {
  const {title, onClick, className} = props
  return (
    <button
      className={className}
      onClick={onClick}
      type={"button"}
    >
      {title}
    </button>
  );
};