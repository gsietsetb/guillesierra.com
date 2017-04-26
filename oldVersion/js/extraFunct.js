

/** Toggle function*/
$(".a").click(function() {
    $(this).toggleClass('selected');

    $(".courseBox").hide();

    var datatypes = $(".courseBox");

    $(".button.datatype").not('.selected').each(function() {
        var selClass = $(this).attr('id').replace('Button', '');

        datatypes = datatypes.filter(".courseBox[data-type!='" + selClass + "']");
    });

    $(".button.selected.datalocation").each(function() {
        var selClass = $(this).attr('id').replace('Button', '');

        datatypes.filter(".courseBox[data-location='" + selClass + "']").show();
    });
});


var jobs=false, projects=false, studies=false, hack=false;

var key = function(obj){
  // some unique object-dependent key
  return obj.totallyUniqueEmployeeIdKey; // just an example
};

function toggleDisplay(key){
	window[key] = window[key] ? false : true;
	projects ? toggleFilter("projects",true) : toggleFilter("projects",false);
	jobs ? toggleFilter("jobs",true) : toggleFilter("jobs",false);
	studies ? toggleFilter("studies",true) : toggleFilter("studies",false);
	hack ? toggleFilter("hack",true) : toggleFilter("hack",false);
}

function toggleFilter(c,show) {
    document.getElementById(c.concat("Filter")).style.opacity = show ? 1 : 0.5;
	var elems = document.getElementsByClassName(c);
	for(var j = 0; j != elems.length; ++j){
		elems[j].style.display = show ? "inline" : "none";
	}
}

/** NextImage function*/

var i=1;
function displayNextImageGot() {
	var srcGot= "img/imgRecog".concat(i).concat(".jpg");
	document.getElementById("imgSwitcher").src = srcGot;
	if(i++>=4){
		i=1;
	}
}

var r=1;
function displayNextImageShot() {
    var srcShot= "img/glamGot".concat(r).concat(".png");
    document.getElementById("ShotSwitcher").src = srcShot;
    if(r++>=6){
        r=1;
    }
}


var n=1;
function displayNextIco() {
	var srcIco= "img/sierraIco".concat(++n).concat(".jpg");
	// alert(srcIco);
	document.getElementById("icoSwitch").src = srcIco;
	if(n>=5){
		n=1;
	}
}
var b=1;
function displayNextImageCubecat() {
	b == 1 ? b=3 : b=1;
	var srcCube= "img/nanosatlab_slideshow_0".concat(b).concat(".jpg");
	document.getElementById("imgSwitcherCubecat").src = srcCube;
}

function startTimer() {
	setInterval(displayNextImageGot, 4000);
	setInterval(displayNextImageCubecat, 5000);
	// setInterval(displayNextImageShot, 1000);
    // setInterval(displayNextIco, 5000);
}

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    // var miliseconds = Math.floor((t /1000));
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
        //, 'miliseconds': miliseconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    // var milisecondsSpan = clock.querySelector('.miliseconds');


    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        // milisecondsSpan.innerHTML = ('0' + t.miliseconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1);
}

var deadline = new Date("May 25, 2017 09:00:00");//Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
