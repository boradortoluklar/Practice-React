import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AuthContextProvider from './Contexts/AuthContext';
import ThemeContextProvider from './Contexts/ThemeContext';
import TodoListContextProvider from './Contexts/TodoListContext';


function App() {
  return (
    <div className="App">
      <div className=' ui raised very padded text container segment'>
        <ThemeContextProvider>
          <AuthContextProvider>         
            <TodoListContextProvider>
              <Navbar />
              <TodoList />
            </TodoListContextProvider>
          </AuthContextProvider>
        </ThemeContextProvider>
      </div>
    </div>
  );
}
export default App;
