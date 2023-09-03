import React from 'react';
import styles from './RecipiItem.module.css';
import useActions from '../hooks/useActions';
import { useFavorites } from '../hooks/useFavorites';

const RecipeItem = ({ recipe }) => {
  // const favorites = useSelector((state) => state.favorites);
  const { favorites } = useFavorites();
  const { toggleFavorites } = useActions();

  const isExists = favorites.some((el) => el.id === recipe.id);

  // console.log(favorites);
  // console.log(recipe);
  // console.log(reducer);

  return (
    <div className={styles.item}>
      <h2>{recipe.name}</h2>
      <button
        onClick={() => toggleFavorites(recipe)}
        className={styles.add_btn}
      >
        {isExists ? 'Remove from' : 'Add to'} favorites
      </button>
    </div>
  );
};

export default RecipeItem;
