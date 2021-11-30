module.exports = (req, res) => {
  const { name } = req.params;
  res.send(name);
};
