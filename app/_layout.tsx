import {Stack} from 'expo-router'
import {GluestackUIProvider} from '@gluestack-ui/themed'
import {config} from '@gluestack-ui/config'
import {HEADER_COLOR} from '@/constants/colors';
import {Provider} from 'react-redux';
import {store} from '@/store/store';

export default function RootLayout() {
  return (
      <GluestackUIProvider config={config}>
        <Provider store={store}>
          <Stack>
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="TaskFormPage" options={{
              headerTitle: 'Criar Tarefa',
              headerStyle: {
                backgroundColor: HEADER_COLOR
              }
            }} />
          </Stack>
        </Provider>
      </GluestackUIProvider>
  )
}
