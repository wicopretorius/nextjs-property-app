import Link from 'next/link';

const PropertyPage = ({ params, searchParams}) => {
   
    return ( 
        <div> 
             <p>Property Paged id: {params.id} </p>
            <p>Search Params rooms: { searchParams.rooms}</p>
            <p><Link href="/" className='text-blue-500 hover:underline'>Go Home</Link></p>
        </div>
    );
}
 
export default PropertyPage;