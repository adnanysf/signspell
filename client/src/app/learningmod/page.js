'use client'
import Navbar from "../components/Navbar"


export default function Page() {

    return(
        <div style={
            {
                display: 'flex',
                height: '100vh',
                flexDirection: 'column',
            }
        
        }>
            <Navbar page={"LearningModule"}/>
            <h1>Learning Module</h1>
        </div>
    )

}