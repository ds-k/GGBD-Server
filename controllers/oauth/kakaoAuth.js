module.exports = async (req, res) => {
  const clientUrl =
    process.env.NODE_ENV === "production"
      ? process.env.PROD_REACT_CLIENT
      : process.env.DEV_REACT_CLIENT;
  const { code } = req.query;
  res.redirect(`${clientUrl}/?code=${code}`);
};
