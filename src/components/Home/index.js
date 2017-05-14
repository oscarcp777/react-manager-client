import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer'
const Home = (props) => {
  return(
    <div className="app">
        <Header menu={props.menu} breadcrumbs={props.breadcrumbs}/>
        <div className="app-body">
            <Sidebar menu={props.menu}  />
            <main className="main">
                 {props.children}
            </main>
        </div>
        <Footer/>
    </div>
)
}


export default Home;
