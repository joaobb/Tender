import { createContext } from 'react';

const RecipeFormContext = createContext({
  isEditable: false,
  onEdit: ({ type, index }) => {
    console.log('DEFAULT EDIT HANDLER', { type, index });
  },
  onRemove: ({ type, index }) => {
    console.log('DEFAULT REMOVAL HANDLER', { type, index });
  },
});

export default RecipeFormContext;
