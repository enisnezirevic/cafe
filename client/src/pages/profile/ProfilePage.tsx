import {ProfileHeader} from "./components/ProfileHeader.tsx";
import {ProfileTabs} from "./components/ProfileTabs.tsx";
import styles from "./ProfilePage.module.scss"

export const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <ProfileHeader
        firstName="Placeholder"
        lastName="User"
        username="placeholder"
        followers={0}
        following={0}/>
      <ProfileTabs/>
    </div>
  );
};