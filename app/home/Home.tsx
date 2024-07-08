import {StyleSheet} from 'react-native'
import {Header} from './Header'
import {useDateInfo} from '@/hooks/useDateInfo'
import {captalizeWeekDay} from '@/utils/date-utils'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Tasks} from './Tasks'

export function Home() {
  const dateInfo = useDateInfo(new Date(), {transform: captalizeWeekDay})

  return (
    <SafeAreaView style={styles.container}>
      <Header dateInfo={dateInfo}/>
      <Tasks dateInfo={dateInfo} style={styles.tasks}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  tasks: {
    marginTop: 4
  }
})
