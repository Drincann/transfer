import React from "react";

export default () => {
    fetch("/api/hello", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(data => {
        console.log(data)
        alert(data)
    }).catch(err => {
        console.log(err)

    })
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}