// Used for User controller -> Create action
module.exports = function termsAndConditions (req, res, next) {
  
  if(!req.param('terms')){

    res.status(400).send({
      invalidAttributes : {
        terms : [
          {
            message : 'You have to accept our terms before signing up!'
          }
        ]
      }
    });

  }else{
    next();
  }

};