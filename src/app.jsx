import './app.css';
import LoginPage from './components/login_page/login_page';

function App({ authService }) {
  return <LoginPage authService={authService} />;
}

export default App;
