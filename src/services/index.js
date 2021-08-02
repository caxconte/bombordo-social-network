const loginEmailAndPassword = (email, password) => {
 firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
   let user = userCredential.user;
   window.location.replace('/feed');
  })
  .catch((error) => {
   let errorCode = error.code;
   let errorMessage = error.message;
  });
}

const loginWithGmail = () => {
 const provider = new firebase.auth.GoogleAuthProvider();
 firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
   const credential = result.credential;
   const token = credential.accessToken;
   const user = result.user;
   window.location.replace('/feed');
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   const email = error.email;
   const credential = error.credential;
  });
}

const signUpWithGoogle = (email, password) => {
 firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
   const user = userCredential.user;
   window.location.replace('/profile');
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
  });
}

const keepMeLogged = (persistence) => {
 firebase
  .auth()
  .setPersistence(persistence)
  .then(() => {
   const provider = new firebase.auth();
   return firebase.auth().signInWithRedirect(provider);
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
  });
}

const signOut = () => {
 firebase
  .auth()
  .signOut()
  .then(() => {
   window.location.replace('/');
  }).catch((error) => {
  });
}

const resetPassword = (email) => {
 firebase
  .auth()
  .sendPasswordResetEmail(email)
  .then(() => {
   alert('E-mail enviado com sucesso! Confira sua caixa de entrada');
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
  });
}

export { loginEmailAndPassword, loginWithGmail, signUpWithGoogle, keepMeLogged, resetPassword, signOut }