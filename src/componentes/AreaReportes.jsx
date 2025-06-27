import React, { useState } from 'react';
import { BiDownload, BiCalendar, BiBarChartAlt2, BiPieChartAlt } from 'react-icons/bi';
import '../assets/scss/_03-Componentes/_AreaReportes.scss';

const AreaReportes = () => {
  const [reportType, setReportType] = useState('mensual');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  // Datos de ejemplo para los reportes
  const reportData = {
    mensual: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
      expensas: [120000, 125000, 130000, 128000, 135000, 140000],
      reclamos: [5, 8, 6, 10, 7, 4],
    },
    anual: {
      labels: ['2020', '2021', '2022', '2023'],
      expensas: [1450000, 1500000, 1550000, 1600000],
      reclamos: [45, 52, 48, 60],
    }
  };

  const currentData = reportData[reportType];

  return (
    <div className="reportes-admin-container">
      <div className="reportes-header">
        <h2>Reportes y Estadísticas</h2>
        <div className="reportes-actions">
          <button className="btn generate-btn">
            <BiDownload /> <span>Exportar Reporte</span>
          </button>
        </div>
      </div>

      <div className="reportes-filters">
        <div className="filter-group">
          <label>Tipo de Reporte</label>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${reportType === 'mensual' ? 'active' : ''}`}
              onClick={() => setReportType('mensual')}
            >
              <BiCalendar /> Mensual
            </button>
            <button 
              className={`filter-btn ${reportType === 'anual' ? 'active' : ''}`}
              onClick={() => setReportType('anual')}
            >
              <BiBarChartAlt2 /> Anual
            </button>
          </div>
        </div>

        <div className="filter-group">
          <label>Filtros</label>
          <div className="date-filters">
            {reportType === 'mensual' && (
              <select 
                value={month} 
                onChange={(e) => setMonth(e.target.value)}
                className="form-control"
              >
                <option value="">Todos los meses</option>
                <option value="01">Enero</option>
                <option value="02">Febrero</option>
                {/* ... otros meses ... */}
              </select>
            )}
            <select 
              value={year} 
              onChange={(e) => setYear(e.target.value)}
              className="form-control"
            >
              <option value="">Todos los años</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
      </div>

      <div className="reportes-content">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-header">
              <BiBarChartAlt2 className="stat-icon" />
              <h3>Expensas {reportType === 'mensual' ? 'Mensuales' : 'Anuales'}</h3>
            </div>
            <div className="stat-value">${currentData.expensas.reduce((a, b) => a + b, 0).toLocaleString()}</div>
            <div className="stat-graph">
              {/* Aquí iría un gráfico real (Chart.js, etc) */}
              <div className="graph-placeholder">
                Gráfico de {reportType === 'mensual' ? 'barras mensuales' : 'línea anual'}
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <BiPieChartAlt className="stat-icon" />
              <h3>Distribución de Reclamos</h3>
            </div>
            <div className="stat-value">{currentData.reclamos.reduce((a, b) => a + b, 0)} total</div>
            <div className="stat-graph">
              <div className="graph-placeholder">
                Gráfico de torta por categorías
              </div>
            </div>
          </div>

          <div className="stat-card wide">
            <div className="stat-header">
              <BiCalendar className="stat-icon" />
              <h3>Histórico</h3>
            </div>
            <div className="stat-table">
              <table>
                <thead>
                  <tr>
                    <th>{reportType === 'mensual' ? 'Mes' : 'Año'}</th>
                    <th>Expensas</th>
                    <th>Reclamos</th>
                    <th>Morosidad</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.labels.map((label, index) => (
                    <tr key={index}>
                      <td>{label}</td>
                      <td>${currentData.expensas[index].toLocaleString()}</td>
                      <td>{currentData.reclamos[index]}</td>
                      <td>{Math.floor(Math.random() * 10)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaReportes;