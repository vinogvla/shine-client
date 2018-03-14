import React  from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Login from './components/Login'

const Home = () => <div>Home</div>
const Order = () => <div>Order</div>
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
      <Route path="/login" component={Login} />
      <Route path="/order" component={Order} />

    </Layout>
  </BrowserRouter>
)

export default App
