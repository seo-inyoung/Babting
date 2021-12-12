import React from "react";
import SearchForm from "./SearchForm";
import ListView from "./View/ListView";
import GridView from './View/GridView';
import MapView from "./View/MapView";

function SearchTotal (props) {
    const {restaurants} = props;
    //console.log(restaurants);
    return (
        <>
        <SearchForm restaurants={restaurants}/>
        </>
    );
}

export default SearchTotal;