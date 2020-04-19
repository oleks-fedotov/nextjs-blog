import Layout from '../components/PageLayout'
import PostLink from '../components/PostLink'

const blogPosts = [
  'Hello Next.js',
  'Learn Next.js is awesome',
  'Deploy apps with Zeit',
]

const getBlockPostId = (title: string) =>
  title.toLowerCase().replace(/ /g, '-').replace(/\./, '')

export default function Index() {
  return (
    <Layout>
      <h1>bad_developer blog</h1>
      <h2>Posts:</h2>
      <ul>
        {blogPosts.map(title => (
          <li key={title}>
            <PostLink id={getBlockPostId(title)} title={title} />
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          h1,
          h2,
          a {
            font-family: 'Gill Sans', sans-serif;
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }
        `}
      </style>
      <style global jsx>{`
        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  )
}
