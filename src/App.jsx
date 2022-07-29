import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const data = [
    {
      title: 'Explore The World',
      imageUrl:
        'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Sunny Beach',
      imageUrl:
        'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'City on Winter',
      imageUrl:
        'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    },
    {
      title: 'Mountains - Clouds',
      imageUrl:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'City on Winter - New',
      imageUrl:
        'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    },
    
  ];
  function onClick(x) {
    setCount(x); 
  }

  return (
    <div className='container'>
      {
      data.map((d, i) => (
        <div
          key={i}
          className={count === i ? 'panel active' : 'panel'}
          style={{
            backgroundImage: `url(${d.imageUrl})`,
          }}
          onClick={() => onClick(i)}
        >
          <h3>{d.title}</h3>
        </div>
      ))}
    </div>
  );
  
}

export default App
