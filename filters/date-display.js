module.exports = (date) =>
  new Date(date).toISOString().split('T')[0].replaceAll('-', '.');
