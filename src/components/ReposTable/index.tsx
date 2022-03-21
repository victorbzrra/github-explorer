import { ReposDataProps } from './interface';

import styles from './styles.module.scss';

export function ReposTable({option, publicRepos, starredRepos}: ReposDataProps) {
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
        {option
          ? publicRepos.map((repo) => (
              <tr>
                <td>
                  <a href={repo.html_url}>{repo.name}</a>
                </td>
                <td>{repo.stargazers_count}</td>
                <td>{repo.created_at}</td>
              </tr>
            ))
          : starredRepos.map((repo) => (
              <tr>
                <td>
                  <a href={repo.html_url}>{repo.name}</a>
                </td>
                <td>{repo.stargazers_count}</td>
                <td>{repo.created_at}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}