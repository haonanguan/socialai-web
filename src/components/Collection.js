import React, { useState, useEffect } from "react";
import { SEARCH_KEY, BASE_URL, TOKEN_KEY } from "../constants";
import SearchBar from "./SearchBar";
import PhotoGallery from "./PhotoGallery";

function Collection(props) {
    const [searchOption, setSearchOption] = useState({
        type: SEARCH_KEY.all,
        keyword: "",
    });

    const handleSearch = (option) => setSearchOption(option);
    return (
        <div className="home">
            <SearchBar handleSearch={handleSearch} />
            <PhotoGallery />
        </div>
    );
}

export default Collection;
