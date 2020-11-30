import { createContext } from 'react';

const RecipeFormContext = createContext({
  isEditable: false,
  onEdit: () => {},
  onRemove: () => {},
});

export default RecipeFormContext;
