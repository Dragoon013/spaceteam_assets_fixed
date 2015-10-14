function randomNumber1() {
      var x = Math.floor((Math.random() * 1000) + 1);
      document.getElementById("number1").innerHTML = x;
  };
  function randomNumber2() {
      var x = Math.floor((Math.random() * 500));
      document.getElementById("number2").innerHTML = x;
  };
  function randomNumber3() {
      var x = Math.floor((Math.random() * 200) + 1);
      document.getElementById("number3").innerHTML = x;

  };

  function bp() {
    jQuery('#green').hide();
    jQuery('#red').hide();
    r = Math.random() * 2.0;
    jQuery.ajax("/errors/ajax?p=" + r, {
      success: function (data,status) {
        jQuery('#green').show();
      },
      complete: function (xhr,status) {
        if (status != "success") {
          jQuery('#red').show();
        }
      }
    });
  }
  jQuery().ready(function () {
    jQuery('#green').hide();
    jQuery('#red').hide();
  });

  function gridSearch() {
    jQuery('#green').hide();
    jQuery('#red').hide();
  }

function enableButtons() {
  var maxIntruders = 100;
  var intruders = 0;

  $("#search li").on('click', function () {
    $("#search1").toggleClass('hidden');
    $("#search2").toggleClass('hidden');

    // Generate a RangeError by calling ourselves over and over again. This happens because there's a `trigger` inside the `on('click')` (aka clickhandler).
    if(intruders >= maxIntruders) {
      console.log('INTRUDER ALERT!');
      intruders = intruders + 1;
    } else {
      $("#search li").trigger('click');
    }

    // $('#search1').on('click', function () {
    //   // $this = $(this);

    //   // if($this.attr('src') == '/assets/img/search-grid2.png') {
    //   //   $this.attr('src', '/assets/img/search-grid3.png')
    //   // } else {
    //   //   $this.attr('src', '/assets/img/search-grid2.png')
    //   // }
    // });
  });
}
$(document).ready(function() {
    enableButtons();
});


function openChannel() {
    alert("Channel open, set hailing frequency");
};
function hailingFrequency() {
    alert("Hailing frequency set");
};


$(document).ready( function(){
  randomNumber1();
  randomNumber2();
  randomNumber3();
  console.log("Red Alert");
  bp();
  gridSearch();
  systemWarning();
});
