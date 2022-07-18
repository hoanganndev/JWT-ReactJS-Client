import React from "react";
import "./Navigation.scss";
const Navigation = () => {
    return (
        <div>
            <div class="topnav">
                <a class="active" href="/">
                    Home
                </a>
                <a href="/check1">check 1</a>
                <a href="/check2">check 2</a>
            </div>
        </div>
    );
};

export default Navigation;
