import React from "react";
import Items from "./subscription_items";
import ItemTag from "./ItemTag";
function Subscription(){
    return <div className="subscription">
        <h2>All in one simple subscription</h2>
        <div className="icon-division">
        {Items.map(item => {
            return <ItemTag img={item.icon} name={item.name} />
        })}
        </div>
    </div>
}

export default Subscription;