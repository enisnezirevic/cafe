import styles from "./ProfileTabs.module.scss";
import "../../../styles/_containers.scss";
import {useLocation, useNavigate} from "react-router-dom";

export const ProfileTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const activeTab = queryParams.get("query");

  const handleNavigation = (query: string) => {
    const queryParams = new URLSearchParams({query});
    navigate(`?${queryParams.toString()}`);
  };

  return (
    <div className="main__container">
      <div className={styles.container}>
        <button
          className={`${styles.selection} ${activeTab === "posts" ? styles.active : ""}`}
          onClick={() => handleNavigation("posts")}>
          Posts
        </button>
        <button
          className={`${styles.selection} ${activeTab === "likes" ? styles.active : ""}`}
          onClick={() => handleNavigation("likes")}>
          Likes
        </button>
      </div>
    </div>
  );
};