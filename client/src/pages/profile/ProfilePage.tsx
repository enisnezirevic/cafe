import {ProfileHeader} from "./components/ProfileHeader.tsx";

export const ProfilePage = () => {
  return (
    <>
      <ProfileHeader
        firstName="Placeholder"
        lastName="User"
        username="placeholder"
        followers={0}
        following={0}/>
    </>
  );
};