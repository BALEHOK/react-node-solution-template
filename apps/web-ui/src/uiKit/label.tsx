import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

export interface Props {
  className?: string;
  text: string;
}

const useStyles = createUseStyles({
  root: {
    fontSize: '12px',
    color: 'rgb(178, 179, 189)',
  },
});

export const Label = ({ text, className }: Props) => {
  const classes = useStyles();

  return <div className={clsx(classes.root, className)}>{text}</div>;
};
