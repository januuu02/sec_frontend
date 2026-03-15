import React from "react";

function App() {

  const query = new URLSearchParams(window.location.search);
  const search = query.get("q");

  return (
    <div>
      <h1>Secure Web App Frontend</h1>

      <p>Search Query:</p>

      {/* Vulnerability: Unsafe rendering of user input */}
      <div dangerouslySetInnerHTML={{ __html: search }}></div>

    </div>
  );
}

export default App;
