export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export interface IPostItemProps {
  post: IPost
}

export interface DetailsButtonProps {
  id: number
}
