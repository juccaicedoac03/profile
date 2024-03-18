import styles from "./page.module.css";
import { getDictionary } from "../../getDictionary";

export default async function Home({params}) {
  const lang = await getDictionary(params.lang);
  return (
    <main className={styles.main}>
      <h1>{lang.Landing.title}</h1>
    </main>
  );
}
