function Records() {
  const mockRecords = [
    { student: "Luna", score: 980, streak: 12 },
    { student: "Kai", score: 870, streak: 9 },
  ];
  return (
    <section>
      <h1>Records</h1>
      <table>
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Puntaje</th>
            <th>Streak</th>
          </tr>
        </thead>
        <tbody>
          {mockRecords.map((record) => (
            <tr key={record.student}>
              <td>{record.student}</td>
              <td>{record.score}</td>
              <td>{record.streak}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Records;