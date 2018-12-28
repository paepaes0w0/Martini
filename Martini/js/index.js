$(document).ready(function() {
  var age = {};

  // For use without cookies
  initAge();

/*  // check if cookie for validAge exists..
  if (cookie.get('validAge') == 'true') {
    return true;
  } else {
    // doesn't exist so lets make them enter a birthday...
    $('#ageModal').modal('show');
    initAge();
  }*/

  // starts the age verification process
  function initAge() {
    var month = 0;
    var day = 0;
    var year = 0;

    $("#age-submit").on("click", function() {
      age['month'] = $("#verify-month").val();
      age['day'] = $("#verify-day").val();
      age['year'] = $("#verify-year").val();
      checkDate();
    });
  }

  // Check to see if user entered a valid date...
  function checkDate() {
    if (age.month == 'none' || age.day == 'none' || age.year == 'none') {
      // Fade in the error...
      // $('#modal-error').css('visibility', 'visible').hide().fadeIn('slow');

      // changes the background color of the select if invalid
      if (age.month == 'none') {
        $("#verify-month").css('background', 'rgba(244, 111, 119, 0.62)');
        // Look for change of value and change background color when valid
        $("#verify-month").on('change', function() {
          if ($("#verify-month").val() == 'none') {
            $("#verify-month").css('background', 'rgba(244, 111, 119, 0.62)');
          } else {
            $("#verify-month").css('background', 'white');
          }
        });
      }

      // changes the background color of the select if invalid
      if (age.day == 'none') {
        $("#verify-day").css('background', 'rgba(244, 111, 119, 0.62)');
        // Look for change of value and change background color when valid
        $("#verify-day").on('change', function() {
          if ($("#verify-day").val() == 'none') {
            $("#verify-day").css('background', 'rgba(244, 111, 119, 0.62)');
          } else {
            $("#verify-day").css('background', 'white');
          }
        });
      }

      // changes the background color of the select if invalid
      if (age.year == 'none') {
        $("#verify-year").css('background', 'rgba(244, 111, 119, 0.62)');
        // Look for change of value and change background color when valid
        $("#verify-year").on('change', function() {
          if ($("#verify-year").val() == 'none') {
            $("#verify-year").css('background', 'rgba(244, 111, 119, 0.62)');
          } else {
            $("#verify-year").css('background', 'white');
          }
        });
      }
    } else {
      oldEnough();
    }
  }

  // Compares age entered with todays date 21 years ago...
  function oldEnough() {
    var ageLimit = moment().subtract(21, 'years').calendar();
    var birthDate = age.month + " " + age.day + " " + age.year;
    var oldEnough = moment(birthDate, "MM DD YYYY").isBefore(ageLimit, 'day');

    if (oldEnough) {
      //cookie.set('validAge', 'true');
      console.log("it is true");
      $('#ageGate').html("<p class='message'>ยินดีต้อนรับเข้าสู่เว็บไซต์</p>" + "<a href='home.html'><div class='button-true' id='button-true'>เข้าสู่เว็บไซต์</div></a>");
      $("#age-submit").hide();
      $("#button-true").show();
      // $('#ageModal').modal('hide');
    } else {
      //cookie.set('validAge', 'false');
      console.log("it is false");
      $('#ageGate').html("<p class='message'>ขออภัย เว็บไซต์นี้อนุญาติให้เฉพาะบุคคลที่มีอายุเกิน 21 ปี</p>");
    }
  }
});
