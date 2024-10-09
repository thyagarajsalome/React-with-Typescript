import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  color = "primary",
}: Props) => {
  // Fixed typo in destructuring
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
