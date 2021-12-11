import React from "react";

function CheckItem(check) {
    return(
        <span>{check}</span>
    );
}
function Filter(check) {
    console.log(check);
    return(
        <div>
            {check}
        </div>
    );
}

export default Filter;