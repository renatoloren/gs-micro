import React from 'react';
import styles from './Table.module.css';

export const Table = ({ cabecalhos, data, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          {cabecalhos ? cabecalhos.map((c, i) => <th key={i}>{c}</th>) : null}
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={i}>
            {cabecalhos.map((c, i) => (
              <td key={i}>{d[c]}</td>
            ))}
            <td key={i}>
              <button
                className={styles.removeButton}
                onClick={() => onDelete(d.id)}
              >
                excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
