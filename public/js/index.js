'use strict';

let videoData = {};

function getUploadData (dataObject) {
  videoData.url = dataObject.url;
}

$('#upload').on('click', function (e) {
  //prevent form submission
  e.preventDefault();
  videoData.title = $('#videoTitle').val();
  videoData.desc = $('#videoDesc').val();
  videoData.published_at = new Date().toDateString();
  //Send data to server
  $.ajax({
    url: '/videos/upload',
    type: 'POST',
    data: videoData,
    dataType: 'json',
    success: function () {
      console.log('Data sent to server');
    }
  });

  window.location.href = '/';

});

//
// function saveFile (dataObject) {
//   $.ajax({
//     url: '/video/upload',
//     type: 'POST',
//     data: dataObject,
//     dataType: 'json',
//     success: function () {
//       console.log('hi');
//     }
//   })
// }
