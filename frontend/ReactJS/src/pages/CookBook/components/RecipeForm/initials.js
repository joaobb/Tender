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

const SERVES_UNITS = ['Servings', 'Cups'];
const PREPTIME_UNITS = ['Days', 'Hours', 'Minutes'];

export {
  initialBasics,
  initialImage,
  initialEdition,
  TARGET,
  SERVES_UNITS,
  PREPTIME_UNITS,
};
