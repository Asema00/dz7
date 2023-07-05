import React from 'react';
import {Switch} from "@mui/material";

function Mui() {
    return (
        <div>
            <Switch  defaultChecked/>
            <Switch />
            <Switch  disabled defaultChecked/>
            <Switch  disabled/>
        </div>
    );
}

export default Mui;