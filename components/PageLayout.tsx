import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

type PropsType = {
  children: React.ReactElement | React.ReactElement[]
}

const Layout = (props: PropsType) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
