// pages/reports.jsx
import DashboardLayout from '../components/DashboardLayout';

export default function Reports() {
  return (
    <DashboardLayout>
      <h1>Patient Visit Summary</h1>

      <div style={styles.reportBox}>
        <h2>
          Pebbles Flintstone (10 yrs, 1 mo; F; 04/03/04)
        </h2>
        <p><strong>Facility:</strong> PCC Pediatric Test Associates</p>
        <p>20 Winooski Falls Way, Suite 7, Winooski, VT 05404</p>
        <p><strong>Phone:</strong> (800) 722-7708</p>
        <hr />

        <p><strong>DOB:</strong> 04/03/04</p>
        <p><strong>Sex:</strong> Female</p>

        <p><strong>Scheduled Visits:</strong> None</p>
        <p><strong>Date of Last Physical:</strong> 04/11/13</p>

        <h3>Visit Summary for 05/02/14</h3>
        <p><strong>Physician:</strong> Beverly Crusher MD</p>
        <p><strong>Location:</strong> PCC Pediatrics Main Office</p>
        <p><strong>Chief Complaint:</strong> sore throat</p>

        <h4>Vitals</h4>
        <p>Temperature: 102 F</p>

        <h4>Labs</h4>
        <p><strong>Rapid Strep</strong> (Status: Completed)</p>
        <p>Test: Streptococcus pyogenes Ag in Throat by Immunoassay</p>
        <p>Result: Positive (Reference: Negative, Interpretation: Abnormal)</p>

        <p><strong>Throat Culture</strong> (Status: Ordered)</p>

        <h4>Plan</h4>
        <p>Medication: Amox 10 days</p>

        <h4>Other Health Information as of 05/05/14</h4>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Active Problems</th>
              <th>Onset Date</th>
              <th>Problem Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Asthma</td>
              <td>02/02/08</td>
              <td>Sample problem note</td>
            </tr>
            <tr>
              <td>Obesity</td>
              <td>05/05/12</td>
              <td>Sample problem note</td>
            </tr>
          </tbody>
        </table>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>Active Allergies</th>
              <th>Onset Date</th>
              <th>Reaction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Allergy Cat Hair</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: 20, fontWeight: 'bold', backgroundColor: '#4CAF50', color: 'white', padding: '10px' }}>
          PCC Pediatric Test Associates: 05/05/2014 11:56:07 — Page 1 of 2
        </p>
      </div>
    </DashboardLayout>
  );
}

const styles = {
  reportBox: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '700px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
    marginBottom: '10px',
  },
  th: {
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    padding: '5px',
  },
  td: {
    padding: '5px',
  },
};
