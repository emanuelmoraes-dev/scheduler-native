import {DateInfo} from '@/hooks/useDateInfo'
import {FlatList, ListRenderItem, StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native'

export function Tasks({dateInfo}: TasksProps) {
    const tasks: Task[] = [
        {name: 'I did it!'},
        {name: 'I Did it Again!'}
    ]

    const renderTask: ListRenderItem<Task> = ({item}) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    )

    return (
        <>
            <View style={styles.hour}>
                <Text style={styles.hourText}>10:00</Text>
            </View>
            <FlatList
                style={styles.list}
                data={tasks}
                keyExtractor={(_item, index) => index.toString()}
                renderItem={renderTask}
            />
        </>
    )
}

const styles = StyleSheet.create({
    list: {
        minWidth: '50%',
        alignSelf: 'center'
    },
    item: {
        backgroundColor: '#FF7F50',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginVertical: 4
    },
    itemText: {
        color: 'white',
        textAlign: 'center'
    },
    hour: {
        backgroundColor: '#FABB44',
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 4,
        // alignSelf: 'stretch'
    },
    hourText: {
        color: 'black',
        textAlign: 'center'
    }
})

export interface TasksProps {
    dateInfo: DateInfo
}

export interface Task {
    name: string
}
