import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { HomePage, DetailsPage, ErrorPage, ContactPage } from '../../pages';

const Menu = () => {
    return <nav>
         <Link to='/'>Home</Link><br/>
         <Link to='/contact'>Contact</Link>
    </nav>
}

const Router = () => {
    return (
        <>
        <BrowserRouter>
           <Menu />
           <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/details/:id" element={<DetailsPage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default Router;