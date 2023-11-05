import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>Página não encontrada - Site Brasil de Coração</h1>
            <Link to='/'>Voltar</Link>
        </div>
    );
};

export default Error;