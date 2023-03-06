import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from './components/footer';

const App = () => 
<div className="page-container m-4 app">
    <div className='content-wrap'>
        {/* <Header/> */}
        <PortfolioContainer/>
    </div>
    <Footer/>
</div>

export default App;