import {DateInfo} from '@/hooks/useDateInfo'
import {useDoublePress} from '@/hooks/useDoublePress'
import {AntDesign} from '@expo/vector-icons'
import {StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native'

export interface HeaderProps {
    dateInfo: DateInfo
}

export function Header({dateInfo}: HeaderProps) {
    const handleDoublePress = useDoublePress()

    function onDoublePressText(): void {
        dateInfo.setDate(new Date())
    }

    function onPressLeft(): void {
        dateInfo.setDate(new Date(dateInfo.date.getTime() - 24*60*60*1000))
    }

    function onPressRight(): void {
        dateInfo.setDate(new Date(dateInfo.date.getTime() + 24*60*60*1000))
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity onPressOut={onPressLeft}>
                <AntDesign name="left" style={styles.headerLeftIcon}/>
            </TouchableOpacity>

            <TouchableWithoutFeedback onPressIn={handleDoublePress(onDoublePressText)}>
                <Text style={styles.headerText}>{dateInfo.text}</Text>
            </TouchableWithoutFeedback>

            <TouchableOpacity onPressOut={onPressRight}>
                <AntDesign name="right" style={styles.headerRightIcon}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#0099CC',
        paddingVertical: 5
    },
    headerLeftIcon: {
        color: 'white',
        marginRight: 10,
        fontSize: 25,
        width: 30,
        textAlign: 'center'
    },
    headerRightIcon: {
        color: 'white',
        marginLeft: 10,
        fontSize: 25,
        width: 30,
        textAlign: 'center'
    },
    headerText: {
        fontSize: 18,
        color: 'white',
        minWidth: 220,
        textAlign: 'center'
    }
})
