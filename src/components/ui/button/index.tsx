import React from 'react';
import c from 'classnames';
import s from './style.scss';

interface PropsInterface {
  className?: string;
  children?: React.ReactNode;
}

const UiButton: React.FC<PropsInterface & React.HTMLProps<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}: PropsInterface) => (
  <button className={c(s.button, className)} {...props}>{children}</button>
);

export default UiButton;
