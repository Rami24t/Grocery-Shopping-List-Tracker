import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Grocery List</h1>
      </header>
      <main>
      <aside>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/list">Edit List</a></li>
            <li><a href="/about">Add Item</a></li>
            <li><a href="/about">Display</a></li>
            <li><a href="/about">Settings</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </aside>
      <section>
        <h2>Home</h2>
        <p>Home page content</p>
      </section>
      <aside>
      <img src="https://via.placeholder.com/150x350" alt="placeholder" />
      </aside>
        </main>
        <footer>
          <p>Created by <a href="https://www.linkedin.com/in/rami-al-saadi-16a14223a/">Rami Al-Saadi</a></p>
        </footer>
    </div>
  );
}

export default App;
