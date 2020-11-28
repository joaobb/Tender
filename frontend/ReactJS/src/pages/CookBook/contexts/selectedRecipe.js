import { createContext } from 'react';

const SelectedRecipeContext = createContext({
  selected: '',
  setSelected: () => {},
});

export default SelectedRecipeContext;
