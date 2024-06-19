'use client'
import Navbar from "../components/Navbar"
import Block from "../components/learningblock/block";
import styles from "./page.module.css";
import Link from 'next/link'

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
            <div style={
                {
                    height: '90%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5%',
                }
            }>  
                <Block/>
            </div>
        </div>
    )

}