import { View } from 'react-native'
import Navbar from '../components/Navbar'
import AddTaskButton from '../components/AddTaskButton'
const Home = () => {
    return(
        <View>
            <Navbar/>
            <AddTaskButton/>
        </View>        
    )
}

export default Home