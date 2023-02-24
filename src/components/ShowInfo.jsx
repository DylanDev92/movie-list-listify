import React, { useEffect, useState, useRef } from "react";

function ShowInfo(props) {
  const [movieInfo, setMovieInfo] = useState();
  useEffect(() => {
    fetch(
      "http://www.omdbapi.com/?apikey=" +
        process.env.REACT_APP_API_KEY +
        "&i=" +
        props.movieid +
        ""
    ).then((x) => {
      x.json().then((json) => {
        console.log(json);
        setMovieInfo(json);
      });
    });
  }, [props.movieid]);

  return (
    <>
      <div
        style={{
          backgroundColor: "#252525",
          margin: "20px",
          padding: "1.5em",
          borderRadius: "10px",
          marginBottom:"10px",
          display: props.movieid === "" ? "block" : "none",
        }}
      >
        .
      </div>

      <div
        style={{
          backgroundColor: "#252525",
          margin: "20px",
          padding: "1.5em",
          borderRadius: "10px",
          marginBottom:"10px",
          display: props.movieid === "" ? "none" : "block",
          color: "white",
        }}
      >
        <img
          style={{
            borderRadius: "10px",
          }}
          src={movieInfo?.Poster}
          alt=""
        />
        <h3>{movieInfo?.Title}</h3>
        <h4 style={{ margin: "0", marginBottom: "5px", marginTop: "5px" }}>
          {movieInfo?.Plot}
        </h4>
        <h5 style={{ margin: "0", marginBottom: "5px", marginTop: "20px" }}>
          {movieInfo?.Released}
        </h5>
        <h5 style={{ margin: "0", marginBottom: "5px", marginTop: "5px" }}>
          {movieInfo?.Language}
        </h5>
        <div
          style={{
            display: "flex",
            gap: "10px",
            margin: "0",
          }}
        >
          <h5 style={{ margin: "0" }}>{movieInfo?.Country}</h5>
          <h5 style={{ margin: "0" }}>{movieInfo?.Rated}</h5>
        </div>
      </div>
    </>
  );
}

export default ShowInfo;
