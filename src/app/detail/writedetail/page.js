import wirteAction from "@/pages/api/post/action";
import styles from "./page.module.css";

export default function WriteDetail() {
  const today = new Date();
  const createdAt = today.toISOString();
  return (
    <div>
      <header className={styles.header}>
        <h2>글 작성하기</h2>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action="/api/post/action" method="POST">
          <div className={styles.row}>
            <input
              type="hidden"
              id="createdAt"
              name="createdAt"
              value={createdAt}
            />
            <p>
              <label htmlFor="name">작성자</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="title">제목</label>
              <input type="text" id="title" name="title" required />
            </p>
            <p>
              <label htmlFor="summary">내용</label>
              <textarea
                type="text"
                id="summary"
                name="summary"
                rows="10"
                required
              />
            </p>
            <p className={styles.actions}>
              <button type="submit">작성완료</button>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
