import {useDateInfo} from '@/hooks/useDateInfo'
import { captalizeWeekDay } from '@/utils/date-utils'
import {Text, StyleSheet, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

export default function Index() {
  const {text} = useDateInfo(new Date(), {transform: captalizeWeekDay})

  return (    
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{text}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  header: {
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingVertical: 5
  },
  headerText: {
    color: 'white'
  }
})
