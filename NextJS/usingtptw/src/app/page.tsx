import './globals.css'
import Link from 'next/link';

export default function Home() {
  return (
   <div className='w-[700px] mx-auto flex flex-col justify-center items-center bg-blue-400'>
    <h1 className='text-black-500 text-5xl'>Hello world</h1>
    <Link href='/products'>Produtos</Link>
   
   </div>
  );
}
