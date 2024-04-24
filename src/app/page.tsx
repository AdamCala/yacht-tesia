import styles from "@/styles/main/index.module.scss";
import Background from "@/components/Background";
import OrangeRectangle from "@/components/assets/props/OrangeRectangle";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.logo}>
        <span>YACHT </span>
        <span>TESIA</span>
      </h1>
      <h2 className={styles.haslo}>
        <span>Odkrywaj </span>
        <span>morza pod </span>
        <span>naszymi</span>
        <span>żaglami</span>
      </h2>
      <div className={styles.darken} />
      <p className={styles.paragraph}>
        TESIA jest stalowym jachtem przystosowanym do dalekich rejsów i żeglugi
        w każdych warunkach. Jest to jacht niezwykle dzielny - z duszą!
      </p>
      <Link href={"/about"}>
        <OrangeRectangle className={styles.orange_rectangle} />
      </Link>
    </main>
  );
}
