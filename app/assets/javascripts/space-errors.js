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

function toggle() {
  $("#search").click(function() {
      var sourceElement = $('#source-div'); //Source Div Element
      var destinationElement = $('#dest-div'); //Destination Div element
      var contentToMove = $('#content-div'); //Content Div Element to move
      var SourceDivEmpty = sourceElement.is(":empty"); //returns true if element is empty

      if(SourceDivEmpty) //return true if source element is empty
      {
          contentToMove.appendTo(sourceElement);
          destinationElement.empty();
      }else{
          contentToMove.appendTo(destinationElement);
          sourceElement.empty();
      }
  });
}
$(document).ready(function() {
    toggle()
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
  toggle();
  gridSearch();
  systemWarning();
  probeLaunchSequence('Begin Launch Sequence for Class IV Probe');
});
