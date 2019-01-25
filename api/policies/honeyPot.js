// Used for User controller -> Create action
module.exports = function honeyPot (req, res, next) {
  
  if(req.param('fakeinput') === ''){
     next();
  }else{
    res.status(400).send({
      invalidAttributes : {
        fakeinput : [
          {
            message : 'Are you sure to be a human?'
          }
        ]
      }
    });
  }

};