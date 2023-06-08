import { StyleSheet, Text, SafeAreaView } from 'react-native'
import TodoHeader from './src/components/TodoFooter'
import TodoList from './src/components/TodoList'
import store from './src/redux/store';
import { Provider } from 'react-redux';
import Header from './src/components/Header/Header';

export default function App() {
  const RootApp = () => {
    return (
      <SafeAreaView>
        <Header/>
        <TodoList />
        <TodoHeader />
      </SafeAreaView>
    )
  }

  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  )
}
