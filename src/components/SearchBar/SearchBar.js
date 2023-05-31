import React from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

const SearchBar = () => {
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOptions];
            return <li key={sortByOptionValue}>{sortByOption}</li>;
        });
    };

    return(
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSortByOptions}>
                <ul>{renderSortByOptions()}</ul>
            </div>
            <div className={styles.SearchBarFields}>
                <input placeholder="Search Businesses"/>
                <input placeholder="Location?" />
            </div>
            <div className={styles.SearchBarSubmit}>
                <a>Let's Eat!</a>
            </div>
        </div>
    );
};

export default SearchBar;