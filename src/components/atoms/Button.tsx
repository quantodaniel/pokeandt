type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
  const { children, onClick } = props;

  return (
    <button
      className="border px-4 py-2 hover:border-gray-300 shadow rounded from-slate-50 to-slate-100 bg-gradient-to-br"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
