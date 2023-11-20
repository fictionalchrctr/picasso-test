import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { Box } from '@mui/material'

export const BackButton = (): JSX.Element => {
  const navigate = useNavigate()
  const handleGoBack = (): void => {
    navigate(-1)
  }

  return (
    <div>
      <Box pt={1}>
        <Button onClick={handleGoBack} size="small" variant="contained">
          Назад
        </Button>
      </Box>
    </div>
  )
}
