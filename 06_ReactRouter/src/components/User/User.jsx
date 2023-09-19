
import { useParams } from 'react-router-dom'

function User() {

    const { userId } = useParams()
    return (
        <div className='bg-gray-600 py-6 text-center'>
            <h1 className='text-orange-500 text-3xl'>USER ID:{userId}</h1>
        </div>
    )
}

export default User