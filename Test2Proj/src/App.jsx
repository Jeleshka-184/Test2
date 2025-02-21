import styles from "./App.module.css";
// 
import GoalListComponent from "./components/goalListComponent";

const goalList = [
  { title: "Learn Html", description: "Learn basic tags..." },
  { title: "Learn Css", description: "Learn basic css..." },
  { title: "Learn JavaScript", description: "Learn basic JS..." }, 
];

export default function App() {
  return (
    <div className={styles.page}>
      <main className={styles .main}>
        <div>          
          <GoalListComponent goalList={goalList} />
        </div>
      </main>
      <footer className={styles.footer}>VladChe (c) 2025</footer>
    </div>
  );
}
