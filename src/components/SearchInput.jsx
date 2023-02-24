import React from 'react'
import search from "../assets/search.svg"

function SearchInput(props) {
  return (
    <div  style={{
        backgroundColor: "#AF0404",
        margin: "0px 30px 10px 30px",
        padding: "1em",
        borderRadius: "10px",
        display: "flex",
        gap: "5px",
        marginTop: "0"
    }}>
        <img src={search} width="20px" alt='search margifying glasses'/>
        <input placeholder='Search...' style={{
            backgroundColor: "transparent",
            outline: "none",
            borderStyle: "none",
            color: "#414141",
            fontWeight: "700"
        }} onChange={(e) => {
          props.setsearch(e.target.value)
        }}></input>
    </div>
  )
}

export default SearchInput