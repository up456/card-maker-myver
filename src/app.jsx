import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login_page/login_page';
import Maker_page from './components/maker_page/maker_page';
import AuthService from './service/auth_service';
import ImageFileInput from './components/image_file_input/image_file_input';
import ImageUploader from './service/image_uploader';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props) => {
  return <ImageFileInput {...props} imageUploader={imageUploader} />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage authService={authService} />} />
        <Route
          path="/maker"
          element={
            <Maker_page FileInput={FileInput} authService={authService} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
