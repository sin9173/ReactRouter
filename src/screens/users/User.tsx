import { useParams } from 'react-router-dom';
import { users } from '../../db';

const User = () => {
    const params = useParams();
    console.log(params);

    const { userId } = useParams();
    return <h1>User with it {userId} is named: {users[Number(userId)-1].name}</h1>;
}

export default User;