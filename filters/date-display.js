module.exports = (date) =>
  new Date().toISOString().split('T')[0].replaceAll('-', '.');
