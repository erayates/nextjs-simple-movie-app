import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'


function Footer(){
    return (
        <footer className={`${styles.footer} fluid`}>
            Check out this project on GitHub repo. 🔥
            <Link href="/">
                NETFILMS
            </Link>
        </footer>
    )
}

export default Footer