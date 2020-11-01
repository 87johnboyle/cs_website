import Link from 'next/link';
import {useEffect, useState} from 'react';
import NavBar from './navbar'
import Layout from './layout'


export default function Projects() {
    return (
        <div>
             <NavBar></NavBar>
             <Layout>
            <Link href="/"><a>Home Page</a></Link>



            <p>hello in projects</p>
            </Layout>
        </div>
        
    )
}