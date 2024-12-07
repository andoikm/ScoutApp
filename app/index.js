import AppProvider from './context/AppProvider';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
};

export default App;
