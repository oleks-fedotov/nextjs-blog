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
      <ul>
        {blogPosts.map(title => (
          <PostLink key={title} id={getBlockPostId(title)} title={title} />
        ))}
      </ul>
    </Layout>
  )
}
