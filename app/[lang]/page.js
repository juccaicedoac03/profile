import styles from "./page.module.css";
import { getDictionary } from "../../getDictionary";
import NavBar from "@/components/NavBar";

export default async function Home({params}) {
  const lang = await getDictionary(params.lang);
  return (
    <div>
      <NavBar />
      <section id="features" className={styles.mainSection}>
        Section 1
      </section>
      <section id="pricing" className={styles.mainSection}>
        Section 2
      </section>
      <section id="about" className={styles.mainSection}>
        Section 3
      </section>
    </div>
  );
}
