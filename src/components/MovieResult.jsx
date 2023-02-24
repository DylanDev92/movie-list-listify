import React from "react";

function MovieResult(props) {
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#252525",
        gap: "10px",
        borderRadius: "10px",
        margin: "0px 30px 10px 30px",
      }}
    >
      <div style={{
        width: "50%"
      }}>
        <img
          style={{
            objectFit: "cover",
            borderRadius: "10px 0px 0px 10px",
          }}
          height="200px"
          width="100%"
          src={props.poster}
          alt=""
        />
      </div>
      <div
        className="container-info"
        style={{
          padding: "10px",
          paddingTop: "20px",
          paddingRight: "20px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          width: "70%"
        }}
      >
        <h3 style={{ margin: "0" }}>{props.title}</h3>
        <h4
          style={{
            margin: "0",
            fontWeight: "400",
            marginBottom: "5px",
            marginTop: "5px",
          }}
        >
          {props.year} - <span>{capitalize(props.type)}</span>
        </h4>
      </div>
    </div>
  );
}

export default MovieResult;
