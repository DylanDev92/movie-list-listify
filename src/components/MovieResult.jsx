import React from "react";

function MovieResult() {
  return (
    <div style={{
        display: "flex",
        backgroundColor: "#252525",
        gap: "10px",
        borderRadius: "10px",
        margin: "0px 30px 10px 30px"
    }}>
        <img style={{
            objectFit: "cover",
            borderRadius: "10px 0px 0px 10px"
        }} height="200px" src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" alt="" />
      <div className="container-info" style={{
        padding: "10px",
        paddingTop: "20px",
        paddingRight: "20px",
        color: "white",
        display: "flex",
        flexDirection: "column"
      }}>
        <h3 style={{margin:"0"}}>The Avengers</h3>
        <h4 style={{margin:"0", fontWeight: "400", marginBottom: "5px", marginTop: "5px"}}>2012 - Dicktember</h4>
        <h4 style={{margin:"0", fontWeight: "400"}}>Avengers are so cool, they revenge and do weird things.</h4>
        <h5 style={{margin:"0", fontWeight: "400", textAlign: "right", marginTop: "auto"}}>Rating 6.9/10</h5>
      </div>
    </div>
  );
}

export default MovieResult;
