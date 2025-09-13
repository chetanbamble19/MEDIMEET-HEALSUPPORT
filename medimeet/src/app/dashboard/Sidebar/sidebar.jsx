// components/Sidebar.jsx
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <nav>
        <ul style={styles.ul}>
          <li style={styles.li}><Link href="/patients">👥 My Patients</Link></li>
          <li style={styles.li}><Link href="/reports">📊 Reports</Link></li>
          <li style={styles.li}><Link href="/profile">⚙️ Profile Settings</Link></li>
          <li><Link href="/dashboard/patients">👥 My Patients</Link></li>
<li><Link href="/dashboard/reports">📊 Reports</Link></li>
<li><Link href="/dashboard/earnings">💰 Earnings</Link></li>

        </ul>
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: '200px',
    backgroundColor: '#004d40', // deep green
    color: 'white',
    padding: '20px',
    height: '100vh',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
  },
  li: {
    marginBottom: '20px',
    fontSize: '18px',
  },
};
