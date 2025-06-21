import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Property App',
    keywords: 'real estate, property, rental, buy, sell',
    description: 'Find the perfect rental property',
};

const MainLayout = ({children}) => {
    return ( 
    <html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html> 
    );
}
 
export default MainLayout;