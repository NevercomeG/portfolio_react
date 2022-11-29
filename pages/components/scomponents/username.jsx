import React from "react";
import {UserContext} from "../"

const Username = () => {
    const value = React.useContext(UserContext);
    return <h1>{value}</h1>
}