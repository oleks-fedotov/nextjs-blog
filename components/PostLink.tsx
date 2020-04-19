import Link from 'next/link'

type PropsType = {
  id: string
  title: string
}

const PostLink = (props: PropsType) => (
  <Link href={`/post/[id]`} as={`/post/${props.id}`}>
    <a>{props.title}</a>
  </Link>
)

export default PostLink
