import {PRIMARY_COLOR, SCREEN_COLOR} from '@/constants/colors'
import {useForm, Controller} from 'react-hook-form'
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native'
import {zodResolver} from '@hookform/resolvers/zod'
import {TaskData, TaskSchema} from '@/data/task-data'
import {useDispatch} from 'react-redux'
import {addTask} from '@/store/task-store'
import {router} from 'expo-router'

export function TaskForm() {
  const {
    control,
    handleSubmit,
    // setValue,
    formState: {errors, isValid}
  } = useForm<TaskData>({
    resolver: zodResolver(TaskSchema)
  })

  const dispatch = useDispatch()

  function onSave(task: TaskData) {
    dispatch(addTask(task))
    console.log('task', task)
    router.back()
  }

  return (
    <View style={styles.taskForm}>
      <View style={styles.form}>

        <Controller
          name="title"
          control={control}
          render={( {field: {onChange, onBlur, value}} ) =>
            <>
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Tìtulo"
                style={[{...styles.inputText, ...styles.inputTitle}, [!!errors.title && styles.errorBorder]]} />
              {errors.title?.message && <Text style={styles.errorText}>{errors.title?.message}</Text>}
            </>
          }/>

        <Controller
          name="date"
          control={control}
          render={( {field: {onChange, onBlur, value}} ) =>
            <>
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="dd/MM/yyyy HH:mm"
                style={[
                  {...styles.inputText, ...styles.inputDate},
                  !!errors.title && styles.errorBorder
                ]}/>
              {errors.date?.message && <Text style={styles.errorText}>{errors.date?.message}</Text>}
            </>
          }/>

        <TouchableOpacity style={styles.btnSave} onPressOut={handleSubmit(onSave)} /*disabled={!!errors.root || !isValid}*/>
          <Text style={styles.btnSaveText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  taskForm: {
    flex: 1,
    backgroundColor: SCREEN_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: 200,
    alignItems: 'stretch'
  },
  inputText: {
    backgroundColor: 'white',
    height: 35,
    textAlign: 'center'
  },
  inputTitle: {
    marginBottom: 10
  },
  inputDate: {
    marginBottom: 10
  },
  btnSave: {
    backgroundColor: PRIMARY_COLOR,
    alignSelf: 'center',
    padding: 5,
    borderRadius: 10
  },
  btnSaveText: {
    color: 'white'
  },
  errorBorder: {
    borderColor: 'red'
  },
  errorText: {
    color: 'red',
    marginBottom: 5
  }
})
