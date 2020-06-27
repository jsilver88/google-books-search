import React from "react";

// allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// allows us to use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// allows us to size bootstrap columns with less syntax
export function Col({ size, children }) {
    return (
        <div className={size.split(" ").map(size => "col-" + size).join(" ")}>{children}</div>
    );
}