class ProfileController{
      getProfile(req,res,next){
            res.render('profile'); 
      }
}

export default new ProfileController()  ; 