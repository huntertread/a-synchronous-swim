
(function() {
  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //

  /* --- RANDOM COMMAND --- */
  // const swimCommandFetcher = function () {
  //   $.get({
  //     url: serverUrl,  // url
  //     success: function (data) {  // success callback
  //       console.log('testing success');
  //       SwimTeam.move(data);
  //     },
  //     complete: function () {
  //       console.log('success');
  //       setInterval(swimCommandFetcher, 2500);
  //     }
  //   });
  // }
  // swimCommandFetcher();

  /* --- USER INPUT --- */
  const swimCommandFetcher = function () {
    $.get({
      url: serverUrl,  // url
      success: function (data) {  // success callback
        console.log('testing success');
        console.log(data);
        SwimTeam.move(data);
      },
      complete: function () {
        console.log('success');
        // setTimeout(swimCommandFetcher, 10);
      }
    });
  }
  setTimeout(swimCommandFetcher, 0);
  // setInterval(swimCommandFetcher, 500);

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl + '/background.jpg',
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        console.log('image upload succes');
        // reload the page
        // window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
