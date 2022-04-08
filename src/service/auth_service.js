import { firebaseAuth, googleProvider, githubProvider } from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider();
    return firebaseAuth.signInWithPopup(authProvider);
  }

  logout() {
    firebaseAuth
      .signOut()
      .then(() => {
        console.log('로그아웃 성공');
      })
      .catch((error) => {
        console.log('로그아웃 실패');
      });
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider ${providerName}`);
    }
  }
}

export default AuthService;
