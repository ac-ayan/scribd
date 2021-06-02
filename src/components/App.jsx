import React from "react";
import Navbar from "./Navbar";
import Cover from "./Cover";
import CoverContent from "./CoverContent.jsx";
function App(){
    return <div>
        <Navbar />
        <Cover />
        <CoverContent />
        <div className="white"></div>
    </div>;
}

export default App;