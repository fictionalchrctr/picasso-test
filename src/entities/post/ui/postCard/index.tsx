import { Card, CardContent, Grid, Typography } from '@mui/material'
import { DetailsButton } from '..'
import { IPostItemProps } from '../../../../shared/api'

export const PostCard: React.FC<IPostItemProps> = ({ post }) => {
  return (
    <Grid item xs={8}>
      <Card>
        <CardContent>
          <Typography>№ {post.id}</Typography>
          <Typography>Title: {post.title}</Typography>
          <Typography>
            Body:{' '}
            {post.body.length > 20 ? post.body.slice(0, 20) + '...' : post.body}
          </Typography>
          <DetailsButton id={post.id} />
        </CardContent>
      </Card>
    </Grid>
  )
}
