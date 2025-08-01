import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="h-16 w-16 hover:scale-110 transition-transform" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-16 w-16 hover:scale-110 transition-transform" alt="React logo" />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Vite + React</h1>
        <div className="text-center">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="!bg-blue-500 !text-white !font-bold py-3 px-6 rounded-lg transition-colors mb-4"
            style={{backgroundColor: '#3b82f6', color: 'white', fontWeight: 'bold'}}
          >
            count is {count}
          </button>
          <p className="text-gray-600 mb-4">
            Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-gray-500 text-center text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
