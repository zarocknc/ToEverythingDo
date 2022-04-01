import Link from 'next/link'
import Navbar from "../components/navbar/navbar";
import Aboutone from '../components/about/aboutone'
import AboutTwo from '../components/about/abouttwo'
import Head from 'next/head'

const calculator = (a:number,b:number,op:'multiply'|'add'|'rest'): number => {
    if (op=='multiply')return a*b;
    if (op=='add')return a+b;
    if (op=='rest')return a-b;
    throw new Error('algo salio mas en calculator');
}
console.log(calculator(12,2,'add'));

export default function Acercade(){
    return (
        <>
            <Head><title>Acerca de</title></Head>
            <Navbar/>
            <Aboutone/>
            <AboutTwo/>



        </>
    )
}
