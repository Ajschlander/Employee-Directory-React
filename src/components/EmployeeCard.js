import React from "react";
import axios from "axios";
// https://randomuser.me/api/?results=20

const getUsers = async () => {
    let res = await axios.get("https://randomuser.me/api/?results=20");
    let data = res.data;
    console.log()
}

export default function EmployeeCard(){
    
}