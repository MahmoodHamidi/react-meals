// Normalweise um Information aus API zu rufen brauchen wir
// - fetch-Methode (fetch())
// - die URL als Parameter
// - Async/await - Try/catch

export async function fetchData(url) {
  // Daten über Fetch abrufen mit await
  const response = await fetch(url);

  // wenn respone NICHT OK ist
  if (!response.ok) {
    // erstelle new Fehler und Throw
    throw new Error("Fehler bei fetch");
  }

  // Daten als Json parsen und zurückgeben
  return response.json();
}
