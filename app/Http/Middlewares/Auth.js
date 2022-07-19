exports.authenticated = (req,res,next) => {
    if (req.isAuthenticated()){
        return next();
    }

    return res.redirect('/prefix/404');
}