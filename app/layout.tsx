import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";

export const metadata = {
  title: 'projet de groupe',
  description: 'projet de groupe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
      <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.description}>
          <a href='/' className={styles.darkred}>
            studio
          </a>
          <div className={styles.flex}>
            <a href="compteur">compteur</a>
            <a href="todo">todolist</a>
            <a href="apik">api</a>
          </div>
        </div>
        {children}
        </main>
        </body>
    </html>
  )
}

const inter = Inter({ subsets: ["latin"] });
