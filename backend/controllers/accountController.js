const createAccount = async ({ res }) => {
  try {
    const { account } = res.locals;

    res.status(200).json({
      _id: account._id,
      email: account.email,
      username: account.username,
    });
  } catch (error) {
    console.error(error.message);
    res.json({ message: error.message });
  }
};

const getAccount = async ({ res }) => {
  try {
    const { account } = res.locals;

    res.json({
      _id: account._id,
      email: account.email,
      username: account.username,
      role: account.role,
    });
  } catch (error) {
    console.error(error);
    res.json({ message: error.message });
  }
};

const roleChange = async ({ res }) => {
  try {
    const { account } = res.locals;

    res.json({
      _id: account._id,
      role: account.role,
    });
  } catch (error) {
    console.error(error);
    res.json({ message: error.message });
  }
};

const getLikedRecipes = async ({ res }) => {
  try {
    const { likedRecipes } = res.locals;

    res.json({
      recipes: { likedRecipes },
      count: likedRecipes.length,
    });
  } catch (error) {
    console.error(error);
    res.json({ message: error.message });
  }
};

const getCreations = async ({ res }) => {
  try {
    const { creations } = res.locals;

    res.json({
      recipes: { creations },
      count: creations.length,
    });
  } catch (error) {
    console.error(error);
    res.json({ message: error.message });
  }
};

module.exports = {
  createAccount,
  getAccount,
  getLikedRecipes,
  getCreations,
  roleChange,
};
