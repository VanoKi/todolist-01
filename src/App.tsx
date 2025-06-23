import './App.css'

function App() {
  const createId = () => crypto.randomUUID()
  const todolists = [
    {
      id: createId(),
      title: 'What to learn',
      tasks: [
        {id: '1', title: 'HTML&CSS', isDone: true},
        {id: '2', title: 'JS', isDone: true},
        {id: '3', title: 'React', isDone: false},
      ]
    },
    {
      id: createId(),
      title: 'What to buy',
      tasks: [
        {id: '1', title: 'Milk', isDone: true},
        {id: '2', title: 'Bread', isDone: false},
      ]
    }
  ]
  console.log(`${todolists[0].id}--${todolists[1].id}`)

  return (
    <div className="app">
      <div>
        <h3>What to learn</h3>
        <div>
          <input/>
          <button>+</button>
        </div>
        <ul>
          <li>
            <input type="checkbox" checked={true}/> <span>HTML&CSS</span>
          </li>
          <li>
            <input type="checkbox" checked={true}/> <span>JS</span>
          </li>
          <li>
            <input type="checkbox" checked={false}/> <span>React</span>
          </li>
        </ul>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
    </div>
  )
}

export default App
