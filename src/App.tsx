import { Input } from 'components/Input';
import { UserList } from 'components/UserList';

import 'styles/globals.scss';

import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src="assets/images/nice-view.jpg" alt="nice-view" width="300" height="300" />
      {/* <img src="assets/images/React-icon.svg" alt="react-logo" width="300" height="300" /> */}
      <div className={styles.image}></div>
      <h1 className={styles.title}>React Typescript</h1>
      <br />
      <Input />
      <br />
      <UserList />
    </div>
  );
};
