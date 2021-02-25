// React
import React, {
  FC,
  useCallback,
  useEffect,
  useState
} from 'react'
// Redux
import { useSelector } from 'react-redux'
import { getToken } from '../reducks/users/selectors'
// Material-UI
import { createStyles, makeStyles } from '@material-ui/core/styles'
// Components
import { PostContent, Header } from './index';
// lib
import { fetchPost } from '../lib/Posts'
// types
import { Post } from '../types/Post'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 600,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
  })
);

const TimeLine: FC = () => {
  // styles
  const classes = useStyles();
  // Redux
  const selector = useSelector((state) => state);
  // state
  const [postList, setPostList] = useState<Post[]>([]);
  const [like, setLike] = useState();

  // APIから投稿一覧を取得する
  useEffect(() => {
    (async () => {
      const posts = await fetchPost();
      setPostList([...posts]);
    })()
  }, [])

  const handleClick = () => {
    const token = getToken(selector);
  };

  return (
    <>
      <Header />
      {postList.map((post) => {
        return <PostContent
            key={post.id}
            id={post.id}
            imagePath={post.imagePath}
            description={post.description}
            isPublished={post.isPublished}
            petId={post.petId}
            userId={post.userId}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
          />
      })}
    </>
  )
}

export default TimeLine