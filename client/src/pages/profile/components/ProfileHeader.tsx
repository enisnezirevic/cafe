import styles from "./ProfileHeader.module.scss";
import "../../../styles/_containers.scss";
import backgroundImage from "../../../assets/placeholders/placeholder_profile_backgorund.svg";
import portrait from "../../../assets/placeholders/placeholder_portrait.png";
import {FC} from "react";

interface ProfileHeaderProps {
  firstName: string;
  lastName: string;
  username: string;
  followers: number;
  following: number;
}

export const ProfileHeader: FC<ProfileHeaderProps> = (
  {
    firstName,
    lastName,
    username,
    following,
    followers
  }) => {
  return (
    <div className={styles.profile__header}>
      <div className={styles.background__wrapper}>
        <img className={styles.background} src={backgroundImage} alt="Background"/>
      </div>

      <div className={styles.profile__details}>
        <div className={styles.portrait__wrapper}>
          <img className={styles.portrait} src={portrait} alt="Portrait"/>
        </div>

        <div className={styles.user__info}>
          <div>
            <h2 className={styles.full__name}>{firstName} {lastName}</h2>
            <p className={styles.username}>@{username}</p>
          </div>

          <div className={styles.follow__stats}>
            <span className={styles.follow__count}>
              {following}
              <p className={styles.follow__label}>Following</p>
            </span>
            <span className={styles.follow__count}>
              {followers}
              <p className={styles.follow__label}>Followers</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
