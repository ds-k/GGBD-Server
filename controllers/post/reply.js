module.exports = (req, res) => {
  const { slug } = req.params;
  res.send(slug);
};
