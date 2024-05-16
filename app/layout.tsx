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
    <html lang="en">
      <body>
      <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.description}>
          <a href='/' className={styles.darkred}>
            studio
          </a>
          <div className={styles.margin}>
            <a href="signin">creer</a>
            <a href="login">se connecter</a>
          </div>
        </div>
        {children}
        </main>
        </body>
    </html>
  )
}

const inter = Inter({ subsets: ["latin"] });
