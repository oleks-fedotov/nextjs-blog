import {useRouter} from 'next/router'
import Markdown from 'react-markdown'
import Layout from '../../components/PageLayout'

const postContent = `
This is our blog post.

Yes. We can have a [link](/link).

And we can have a title as well.

### This is a title

And here's the content.
`

export default function Post() {
  const router = useRouter()

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className="markdown">
        <Markdown source={postContent} />
      </div>
      <style jsx global>
        {`
          .markdown {
            font-family: 'Gill Sans', sans-serif;
          }

          .markdown a {
            text-decoration: none;
            color: blue;
          }

          .markdown a:hover {
            opacity: 0.6;
          }

          .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        `}
      </style>
    </Layout>
  )
}
