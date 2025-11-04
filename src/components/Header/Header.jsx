import styles from './Header.module.css';
import Button from 'react-bootstrap/Button';


export function Header() {

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Nextflix</h1>
      <Button variant="danger">Watching</Button>
    </header>
  )
}
