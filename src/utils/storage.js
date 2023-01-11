export const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getData = (key) => {
  const data = localStorage.getItem(key);
  let parseData;
  try {
    parseData = JSON.parse(data);
  } catch (error) {
    parseData = error;
  }
  return parseData;
};

export const deleteData = (key) => {
  localStorage.removeItem(key);
};

export const clearData = () => {
  localStorage.clear();
};
