import { Screen } from './screen';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from './header';

const useStyles = makeStyles({
  screen: {
    margin: 16,
  },
});

export const Layout = () => {
  const classes = useStyles();

  return (
    <Box>
      <Header />
      <Box className={classes.screen}>
        <Screen />
      </Box>
    </Box>
  );
};
