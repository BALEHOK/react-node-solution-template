import { useTranslation } from 'react-i18next';
import { ButtonGroup, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const LangButton = ({ lang, currentLang, children, changeLanguage }: any) => (
  <Button
    onClick={() => changeLanguage(lang)}
    color={currentLang === lang ? 'primary' : 'default'}
  >
    {children}
  </Button>
);

export const Header = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const lang = i18n.language;

  return (
    <header className={classes.root}>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <LangButton
          lang="en"
          currentLang={lang}
          changeLanguage={changeLanguage}
        >
          Eng
        </LangButton>
        <LangButton
          lang="ru"
          currentLang={lang}
          changeLanguage={changeLanguage}
        >
          Рус
        </LangButton>
      </ButtonGroup>
    </header>
  );
};
