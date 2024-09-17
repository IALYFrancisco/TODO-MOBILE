import { View, Text, Image, TextInput, StyleSheet } from 'react-native'

const Navbar = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text style={styles.navbar_tittle}>TODO</Text>
                <Image source={require('../assets/images/menu.png')}></Image>
            </View>
            <View style={styles.informationsBar}>
                <Text>{6} tasks</Text>
                <View style={styles.search_container}>
                    <TextInput style={styles.textInput} placeholder='search a task'></TextInput>
                    <Image source={require('../assets/images/search.png')} style={{ width:16, height: 16, position:'absolute', right: 10 }}></Image>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    navbar: {
        width: '100%',
        height: 60,
        backgroundColor: 'royalblue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12
    }, 
    navbar_tittle:{
        color:'white',
        flex: 1
    },
    informationsBar:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 45,
        alignItems: 'center',
        paddingHorizontal: 12,
        marginTop: 10
    },
    textInput:{
        width: '100%',
        height: 40,
        borderColor: 'royalblue',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 4,
        paddingLeft: 10
    },
    search_container:{
        width: '50%',
        height: 40,
        position: 'relative',
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Navbar