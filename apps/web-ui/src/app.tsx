import { Layout } from './layout';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './i18n/i18n';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Layout />
      </I18nextProvider>
    </ThemeProvider>
  );
};
