import { useNavigate } from 'react-router-dom';
import { List } from '../../components';
import { users } from '../../data';


const Home = () => {
    const navigate = useNavigate();

    const handleClick = (item) => {
        const { id } = item;
        navigate(`/details/${id}`);
    }

    return (
        <>
            <section class='Home'>
                <h1>Produtos</h1>
                <List items={users} onItemClick={handleClick} />
            </section>
        </>
    );
};

export default Home;

