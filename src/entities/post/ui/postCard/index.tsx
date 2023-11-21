import { Card, CardContent, Grid, Typography } from '@mui/material'
import { DetailsButton } from '..'
import { IPostItemProps } from '../../../../shared/api'

export const PostCard: React.FC<IPostItemProps> = ({ id, title, body }) => {
  return (
    <Grid item xs={8}>
      <Card>
        <CardContent>
          <Typography>№ {id}</Typography>
          <Typography>Title: {title}</Typography>
          <Typography>
            Body: {body.length > 20 ? body.slice(0, 20) + '...' : body}
          </Typography>
          <DetailsButton id={id} />
        </CardContent>
      </Card>
    </Grid>
  )
}
