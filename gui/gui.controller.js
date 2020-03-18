const indexView = (req, res) => {
  const dashBoardOptions = [
    {
      title: 'Events',
      description: 'Organize events and check status',
      link: '/events',
    },
    {
      title: 'Mail',
      description: 'Create newsletters and other mail types',
      link: '/mail',
    },
  ];
  res.render('pages/index', { user: req.user, options: dashBoardOptions });
};


module.exports = { indexView };
