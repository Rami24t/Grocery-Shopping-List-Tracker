import './App.css';
import Item from './components/Item';

function App() {

  const items = [
    {
      id: 1,
      name: "Condensed Milk",
      need: false
    },
    {
      id: 2,
      name: "Eier",
      need: true
    },
    {
      id: 3,
      name: "Lettuce",
      need: false
    },
    {
      id: 4,
      name: "Butter",
      need: false
    },
    {
      id: 5,
      name: "Frischkäse",
      need: false
    },
    {
      id: 6,
      name: "Tomaten",
      need: true
    },
    {
      id: 7,
      name: "Onions",
      need: true
    },
    {
      id: 8,
      name: "Garlic",
      need: false
    }
  ]
  
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
        <h2>Items</h2>
        <input type="text" placeholder="New Item" /> <button>+</button>
        <ul>
          {items.map(item => <Item key={item.id} item={item} />)}
        </ul>
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
