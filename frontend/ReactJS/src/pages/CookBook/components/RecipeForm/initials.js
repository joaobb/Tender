const initialBasics = {
  name: '',
  serves: {
    value: 2,
    unit: 'Serves',
  },
  prepTime: {
    value: 10,
    unit: 'Minutes',
  },
  cuisine: 'American',
};

const initialImage = {
  url: '',
  file: null,
};

const initialEdition = {
  active: false,
  index: undefined,
  target: '',
  message: '',
};

const TARGET = {
  INGREDIENTS: 0,
  DIRECTIONS: 1,
};

const SERVES_UNITS = ['servings', 'cups', 'bars'];
const PREPTIME_UNITS = ['days', 'hours', 'minutes'];

export {
  initialBasics,
  initialImage,
  initialEdition,
  TARGET,
  SERVES_UNITS,
  PREPTIME_UNITS,
};
