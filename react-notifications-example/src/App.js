
import './App.css';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import NotificationsExample from './components/notificationsExample/NotificationsExample';

function App() {
  return (
    <div className="App">
      <ReactNotification />
      <NotificationsExample />
    </div>
  );
}

export default App;
