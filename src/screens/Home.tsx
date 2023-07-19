import { users } from "../db";
import { Link, useSearchParams } from 'react-router-dom';

const Home = () => {
    const [readSearchParams, setSearchParams] = useSearchParams();
    console.log(readSearchParams);
    console.log(readSearchParams.has("name"));
    console.log(readSearchParams.get("name"));

    // setTimeout(() => {
    //     setSearchParams({
    //         day : "today",
    //         name : "안녕네임"
    //     })
    // })
    return <div>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>
                        {user.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
}

export default Home;