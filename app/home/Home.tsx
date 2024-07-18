import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {Header} from './Header'
import {useDateInfo} from '@/hooks/useDateInfo'
import {captalizeWeekDay} from '@/utils/date-utils'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Tasks} from './Tasks'
import {AntDesign} from '@expo/vector-icons'
import {HEADER_COLOR, PRIMARY_COLOR, SCREEN_COLOR} from '@/constants/colors'
import {Link, router} from 'expo-router'

export function Home() {
  const dateInfo = useDateInfo(new Date(), {transform: captalizeWeekDay})

  const onCreateTask = () => {
    router.push('TaskFormPage')
  }

  return (
    <>
      <View style={styles.headerContainer}>
        <SafeAreaView>
          <Header dateInfo={dateInfo}/>
        </SafeAreaView>
      </View>
      <View style={styles.content}>
        <View style={styles.tasks}>
          <Tasks dateInfo={dateInfo}/>
        </View>
        <TouchableOpacity onPressOut={onCreateTask} style={styles.createTask} activeOpacity={0.7}>
          <AntDesign name="plus" style={styles.createTaskIcon}/>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: HEADER_COLOR
  },
  content: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: SCREEN_COLOR
  },
  tasks: {
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 4
  },
  createTask: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 50,
    padding: 5,
    marginRight: 3,
    marginBottom: 3
  },
  createTaskIcon: {
    color: 'white',
    fontSize: 25
  }
})
