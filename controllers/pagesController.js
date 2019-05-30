exports.show = (req, res) => {
    const path = (req.path === '/') ? `/home` : req.path;

    // render that path
    res.render(`pages${path}`); // view/pages/about
}