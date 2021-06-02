import React from "react";
import Navbar from "./Navbar";
import Cover from "./Cover";
import CoverContent from "./CoverContent.jsx";
import Subscription from "./Subscription";
import SubQuote from "./SubQuote";
import Catalogue from "./Catalogue";
import Press from "./Press";
import Footer from "./Footer";
function App(){
    return <div>
        <Navbar />
        <Cover />
        <CoverContent />
        <Subscription />
        <SubQuote />
        <Catalogue />
        <Press />
        <Footer />
    </div>;
}

export default App;