import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Timbuktu</h1>

        <q className={styles.description}>
          O sal vem do norte, o ouro vem do sul, mas as palavras de Deus e os
          tesouros da sabedoria vêm de Timbuktu
        </q>
      </main>
    </div>
  );
}
