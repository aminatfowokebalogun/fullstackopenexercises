import React from "react";;

const SearchBar =({onSearch, search})=>{
    return(
        <>
            <div>
                Search by Contact Name
                <p><input type='search' placeholder='search contactlist' onChange={onSearch} value={search}/></p>
            </div>
        </>
    )
}

export default SearchBar;