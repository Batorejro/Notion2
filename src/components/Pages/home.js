import React from 'react'
import Link from 'react-router-dom'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Home</p>
                <ul>
                    <li>
                        <Link to="/home?title=inbox&time1"></Link>
                    </li>
                </ul>
            </div>
        );
    }

}




/*function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to my crew</p>


        </div>
    );

}

export default Home;



/*
import { useState } from "react";
import button from "../components/Buttons";
import SiteItem from ".components/SiteItem";


export function Home() {
    const [showItem, setShowItem] = useState(false)

    function HandleShow({ show }) {
        if (show) {
            return (
                <SiteItem item={item1} />
            );
        }
    }
    const item1 = { title: "firma", desc: "cos tam" }
    return (
        <>
            <button show={showItem} setShow={setShowItem} />
            <HandleShow show={showItem} />
            <h1>to jest strona dla przedsiębiorców</h1>
        </>
    );
}
    */