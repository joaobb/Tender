const like = async ({ res }) => {
  try {
    const { swipe } = res.locals;

    res.json(swipe);
  } catch (error) {
    console.error(error);
    res.json({ message: error.message });
  }
};

const pass = async ({ res }) => {
  try {
    const { swipe } = res.locals;

    res.json(swipe);
  } catch (error) {
    console.error(error);
    res.json({ message: error.message });
  }
};

module.exports = {
  like,
  pass,
};
