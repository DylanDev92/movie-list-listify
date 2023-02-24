import React, {useRef} from 'react'

function Header(props) {
  return (
    <div ref={props.myRef}>
        <header style={{
            backgroundColor: "#252525",
            display: "flex",
            justifyContent: "center",
            borderRadius: "0em 0em 10px 10px"
        }}>
            <h1 style={{
                margin: "0",
                fontWeight: "800",
                color: "white",
                padding: "0.5em"
            }}>LISTFLIX</h1>
        </header>
    </div>
  )
}

export default Header