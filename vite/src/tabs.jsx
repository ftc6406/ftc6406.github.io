import { useState } from "react";

function Tabs() {
    const [currentTab, setCurrentTab] = useState("home-tab");

    function handleClick(event) {
        setCurrentTab(event.target.id);
        console.log(`Current tab: ${currentTab}`);
    }

    return (
        <>
            <link rel="stylesheet" href="tabs.css" />
            <div id="tabs" onClick={handleClick}>
                <div id="home-tab">Home</div>
                <div id="about-us-tab">About Us</div>
            </div>
        </>
    );
}

export default Tabs;
