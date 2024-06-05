import { signOut } from '../utils/auth';

// prettier-ignore
const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">signout</button>';
  document.querySelector('#logout-button').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
