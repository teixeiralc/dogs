import React from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';
import styles from '../../styles/modules/User/UserStatsGraphs.module.css';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: +item.acessos,
      };
    });

    setTotal(data.map(({ acessos }) => +acessos).reduce((a, b) => a + b, 0));
    setGraph(graphData);
  }, [data]);

  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={`${styles.total} ${styles.graph_item}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graph_item}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={styles.graph_item}>
        <VictoryChart>
          <VictoryBar data={graph} alignment="start" />
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
