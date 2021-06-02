import React from "react";
import Navbar from "./Navbar";
import Cover from "./Cover";
import CoverContent from "./CoverContent.jsx";
import Subscription from "./Subscription";
function App(){
    return <div>
        <Navbar />
        <Cover />
        <CoverContent />
        <Subscription />
    </div>;
}

export default App;