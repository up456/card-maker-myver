import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login_page/login_page';
import Maker_page from './components/maker_page/maker_page';
import AuthService from './service/auth_service';

const authService = new AuthService();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage authService={authService} />} />
        <Route
          path="/maker"
          element={<Maker_page authService={authService} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
