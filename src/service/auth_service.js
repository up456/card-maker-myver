import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('로그아웃 성공');
      })
      .catch((error) => {
        console.log('로그아웃 실패');
      });
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
