export default function ComprovarNotes() {
  const nota = 5;
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      <h2>Comprovador de notes</h2>
      <p>
        La nota es un {nota}:
        <strong> {nota >= 5 ? ' Aprovat' : ' Suspès'}</strong>
      </p>
    </div>
  );
}
