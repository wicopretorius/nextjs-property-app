import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <h1 className='text-3xl'>
            Home Page
            </h1>
            <Link href="/properties/smarthomes" className='text-blue-500 hover:underline'>Properties</Link>
        </div>
    );
}
 
export default HomePage;