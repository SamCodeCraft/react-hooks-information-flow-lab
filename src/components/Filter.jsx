import React, { useState } from "react";

function Filter({ onCategoryChange }) {

    return (

        <div>
            <select onChange={onCategoryChange}></select>

        </div>
    )
}

export default Filter;
