import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';


export const Screen = () => {
  const { t } = useTranslation();
  return (
    <Typography variant="h2">
      {t('Title')}
    </Typography>
  );
};
