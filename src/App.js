import './App.css';
import RecipeItem from './RecipeItem/RecipeItem';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { useFavorites } from './hooks/useFavorites.js';
import User from './user/User.js';

function App() {
  // const favorites = useSelector((state) => state.favorites);
  const { favorites } = useFavorites();
  return (
    <section>
      <header className='header'>
        <BsFillBookmarkHeartFill style={{ width: '40px', height: '40px' }} />
        <span className='fav-count'>{favorites.length}</span>
      </header>

      <div className='App'>
        <User />
        <RecipeItem
          recipe={{
            name: 'Pizza',
            id: 1,
          }}
        />
        <RecipeItem
          recipe={{
            name: 'Pasta',
            id: 2,
          }}
        />
        <RecipeItem
          recipe={{
            name: 'Barbeque',
            id: 3,
          }}
        />
        <RecipeItem
          recipe={{
            name: 'Xachapuri',
            id: 4,
          }}
        />
      </div>
    </section>
  );
}

export default App;
