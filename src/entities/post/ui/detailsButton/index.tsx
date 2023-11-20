import { FC } from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { DetailsButtonProps } from '../../../../shared/api'

export const DetailsButton: FC<DetailsButtonProps> = ({ id }) => {
  return (
    <div>
      <Link to={`/${id}`}>
        <Button size="small" variant="contained">
          Просмотр
        </Button>
      </Link>
    </div>
  )
}
