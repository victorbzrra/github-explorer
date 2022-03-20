import styles from './styles.module.scss';

export function ReposTable() {
  return (
    <table className={styles.tableContainer}>
      <thead className={styles.tableHead}>
        <tr>
          <th>Nome</th>
          <th>Quant. Estrelas</th>
          <th>Data de Criação</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        <tr>
          <td>github-explorer</td>
          <td>100</td>
          <td>18/03/2022</td>
        </tr>
        <tr>
          <td>github-explorer</td>
          <td>100</td>
          <td>18/03/2022</td>
        </tr>
        <tr>
          <td>github-explorer</td>
          <td>100</td>
          <td>18/03/2022</td>
        </tr>
      </tbody>
    </table>
  )
}