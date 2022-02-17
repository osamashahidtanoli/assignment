import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
  className?: string;
};

export default function Box(props: Props) {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
}
