import { View, Button, StyleSheet } from 'react-native'

const AddTaskButton = () => {
    return(
        <View style={styles.all_container}>
            <View style={styles.button_container}>
                <Button title='add task' color={'royalblue'}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    all_container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 15, 
        paddingRight: 15
    },
    button_container: {
        width: 100
    }
})

export default AddTaskButton