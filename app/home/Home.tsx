import {Pressable, StyleSheet, View} from 'react-native'
import {Header} from './Header'
import {useDateInfo} from '@/hooks/useDateInfo'
import {captalizeWeekDay} from '@/utils/date-utils'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Tasks} from './Tasks'
import { AntDesign } from '@expo/vector-icons'

export function Home() {
  const dateInfo = useDateInfo(new Date(), {transform: captalizeWeekDay})

  return (
    <View style={styles.home}>
      <SafeAreaView style={styles.container}>
        <Header dateInfo={dateInfo}/>
        <View style={styles.tasks}>
          <Tasks dateInfo={dateInfo}/>
        </View>
        <Pressable>
          <AntDesign name="pluscircle"/>
        </Pressable>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#2F4F4F',
    flex: 1
  },
  container: {
    alignItems: 'center'
  },
  tasks: {
    marginTop: 4,
    alignSelf: 'stretch'
  }
})
