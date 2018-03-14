import React  from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Form from './components/Form'

const Home = () => <div>Home</div>
const Layout = (props) => <div>{props.children}</div>

const App = () => (
  <BrowserRouter>
    <Layout>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/order"}>Order</Link>
      </nav>
      
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Form} />
      <Route path="/order" component={Form} />

    </Layout>
  </BrowserRouter>
)

export default App
