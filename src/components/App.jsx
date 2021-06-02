import React from "react";
import Navbar from "./Navbar";
import Cover from "./Cover";
import CoverContent from "./CoverContent.jsx";
import Subscription from "./Subscription";
import SubQuote from "./SubQuote";
function App(){
    return <div>
        <Navbar />
        <Cover />
        <CoverContent />
        <Subscription />
        <SubQuote />
    </div>;
}

export default App;