import React from "react";
import Navbar from "./Navbar";
import Cover from "./Cover";
import CoverContent from "./CoverContent.jsx";
import Subscription from "./Subscription";
import SubQuote from "./SubQuote";
import Catalogue from "./Catalogue";
import Press from "./Press";
function App(){
    return <div>
        <Navbar />
        <Cover />
        <CoverContent />
        <Subscription />
        <SubQuote />
        <Catalogue />
        <Press />
    </div>;
}

export default App;