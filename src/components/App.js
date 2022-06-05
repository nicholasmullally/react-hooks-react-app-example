import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>Now</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
      <TestComponent />

    </div>
  );
  function Header() {
    return (
      <div>
        <header>
          <h1>Putting It All Together</h1>
        </header>
      </div>
    );
  }
  function ArticleList() {
    return (
      <div>
        <main>
          Article Components
        </main>
      </div>
    );
  }
  function Article() {
    return (
      <div>
        <article>
          <h3>An Amazing Article</h3>
          <small>August 11, 2005</small>
          <p>Preview</p>
        </article>
      </div>
    );
  }

  export default App;
