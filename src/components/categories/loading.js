import Skeleton from "../skeleton";
import styles from "./styles.module.css";

function CategoriesLoading() {
  return (
    <div className={styles.categories}>
      {Array(5)
        .fill(null)
        .map((_, idx) => (
          <Skeleton key={idx} height={72} />
        ))}
    </div>
  );
}

export default CategoriesLoading;
