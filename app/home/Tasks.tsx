import {PRIMARY_COLOR, SECUNDARY_COLOR} from '@/constants/colors'
import {DATE_FORMAT, TaskData} from '@/data/task-data'
import {DateInfo} from '@/hooks/useDateInfo'
import {useGroupBy} from '@/hooks/useGroupBy'
import {selectTask} from '@/store/store'
import {format, parse, startOfDay} from 'date-fns'
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native'
import {useSelector} from 'react-redux'

export interface TasksProps {
    dateInfo: DateInfo
}

export function Tasks({dateInfo}: TasksProps) {
    const tasks = useSelector(selectTask).data

    const groupedTasks = useGroupBy(tasks, {
        getGroup: task => format(parse(task.date, DATE_FORMAT, startOfDay(new Date())), 'HH:mm'),
        getFilter: task => dateInfo.toText(parse(task.date, DATE_FORMAT, startOfDay(new Date()))),
        filter: dateInfo.text
    })

    const renderTask: ListRenderItem<TaskData> = ({item}) => (
        <View style={styles.groupItem}>
            <Text style={styles.groupItemText}>{item.title}</Text>
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
        backgroundColor: SECUNDARY_COLOR,
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
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginVertical: 4
    },
    groupItemText: {
        color: 'white',
        textAlign: 'center'
    }
})
