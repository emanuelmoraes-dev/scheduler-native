import {DateInfo} from '@/hooks/useDateInfo'
import {FlatList, ListRenderItem, StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native'

export function Tasks({dateInfo, style, itemStyle, itemTextStyle}: TasksProps) {
    style = Object.assign({}, defaultStyles.list, style ?? {})
    itemStyle = Object.assign({}, defaultStyles.item, itemStyle ?? {})
    itemTextStyle = Object.assign({}, defaultStyles.itemText, itemTextStyle ?? {})

    const tasks: Task[] = [{name: 'I did it!'}, {name: 'I Did it Again!'}]

    const renderTask: ListRenderItem<Task> = ({item}) => (
        <View style={itemStyle}>
            <Text style={itemTextStyle}>{item.name}</Text>
        </View>
    )

    return (
        <FlatList
            style={style}
            data={tasks}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={renderTask}
        />
    )
}

const defaultStyles = StyleSheet.create({
    list: {},
    item: {
        backgroundColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginVertical: 4
    },
    itemText: {}
})

export interface TasksProps {
    dateInfo: DateInfo
    style?: StyleProp<ViewStyle>
    itemStyle?: StyleProp<ViewStyle>
    itemTextStyle?: StyleProp<ViewStyle>
}

export interface Task {
    name: string
}
