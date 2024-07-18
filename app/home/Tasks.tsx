import {TaskData} from '@/data/task-data'
import {DateInfo} from '@/hooks/useDateInfo'
import {useGroupBy} from '@/hooks/useGroupBy'
import {addDays, format, set} from 'date-fns'
import {useState} from 'react'
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native'

export interface TasksProps {
    dateInfo: DateInfo
}

export function Tasks({dateInfo}: TasksProps) {
    const now = new Date()
    const [tasks] = useState([
        {name: 'I did it!', date: set(now, {hours: 10, minutes: 30})},
        {name: 'I Did it Again!', date: set(now, {hours: 13})},
        {name: 'I Will Do it Again Tomorow!', date: set(addDays(now, 1), {hours: 17})}
    ])

    const groupedTasks = useGroupBy(tasks, {
        getGroup: task => format(task.date, 'HH:mm'),
        getFilter: task => dateInfo.toText(task.date),
        filter: dateInfo.text
    })

    const renderTask: ListRenderItem<TaskData> = ({item}) => (
        <View style={styles.groupItem}>
            <Text style={styles.groupItemText}>{item.name}</Text>
        </View>
    )

    return (
        <>
            {groupedTasks.map((grouped, index) => (
                <View key={`group-${index}`}>
                    <View style={styles.groupTitle}>
                        <Text style={styles.groupTitleText}>{grouped.group}</Text>
                    </View>
                    <FlatList
                        style={styles.groupList}
                        data={grouped.data}
                        keyExtractor={(_item, index) => `groupItem-${index}`}
                        renderItem={renderTask}
                    />
                </View>
            ))}
        </>
    )
}

const styles = StyleSheet.create({
    groupTitle: {
        backgroundColor: '#FABB44',
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 4
    },
    groupTitleText: {
        color: 'black',
        textAlign: 'center'
    },
    groupList: {
        minWidth: '50%',
        alignSelf: 'center'
    },
    groupItem: {
        backgroundColor: '#FF7F50',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginVertical: 4
    },
    groupItemText: {
        color: 'white',
        textAlign: 'center'
    }
})
