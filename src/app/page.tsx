"use client"

import Navbar from "./components/navbar"
import SubNav from "./components/subnav"

export default function Home() {
    return (
        <div className="px-3">
            {<Navbar></Navbar>}
            {<SubNav></SubNav>}
        </div>
    )
}