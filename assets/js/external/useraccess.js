

;(function(){

  var $userForm = $('#user-form');

  $userForm.submit(function(e){

    e.preventDefault();

    $('.alert').alert('close');

    var data = $userForm.serialize();

    $.post($userForm.attr('action'), data)
    .done(function(data){
      window.location = '/';
    })
    .fail(function(data){
      var invalidAttributes = data.responseJSON.invalidAttributes;

      if(invalidAttributes){
        $.each(invalidAttributes, function(name, errors){

          var error = '<div class="alert alert-danger alert-dismissible" role="alert">';
              error += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
              error += '<strong>Warning!</strong> ';
              error += errors[0].message;
              error += '</div>';

          $('input[name="' + name + '"')
          .filter(function(index, el){
          
            var type = el.getAttribute('type');
            if(type != 'checkbox'){
              $(el).val('');
            }
            return true;
          })
          .after(error);
          
        });

      }else{
        window.alert(data);
      }

    });

  });

})();