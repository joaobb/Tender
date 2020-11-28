const getRandomNumber = () => Math.trunc((Math.random() - 0.5) * 20);

const signOut = () => {
  localStorage.clear();
  window.location.replace('/');
};

export { getRandomNumber, signOut };
