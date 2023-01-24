import { useTranslation } from 'react-i18next'

import { Box, Typography } from '@mui/material'

export function LandingPage() {
  const { t } = useTranslation()

  return (
    <Box>
      <Typography>{t('test')}</Typography>
    </Box>
  )
}
