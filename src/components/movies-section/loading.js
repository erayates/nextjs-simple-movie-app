import React from "react";
import Skeleton from "../skeleton";
import styles from "./styles.module.css";

function MoviesSectionLoading() {
  return (
    <div className={styles.moviesSection}>
      <Skeleton width={128} height={36} />
      <div className={styles.movies}>
        {Array(5)
          .fill(null)
          .map((_, idx) => (
            <Skeleton key={idx} />
          ))}
      </div>
    </div>
  );
}

export default MoviesSectionLoading;
