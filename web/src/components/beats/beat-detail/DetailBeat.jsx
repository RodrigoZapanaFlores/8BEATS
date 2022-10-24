//import * as Services from "../../../services/beatService";
// import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
// import { Link } from "react-router-dom";
// import { AccountContext } from "../../../contexts/AccountContext";


function DetailBeat() {
  const { id } = useParams();
  return (
      <div>{id}</div>
    )
  }
  export default DetailBeat;