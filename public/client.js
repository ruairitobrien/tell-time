$(function() {
  
  var answer = $('.answer');
  var answerText = $('.answer-text');
    
  $('.picker').datepicker({
    clearBtn: true
  }).on('changeDate', function(e) {
        console.log(e);
        
        var nw = window.numberToWords;
        
        var now = new Date();
        var then = e.date;
        var inThePast = now.getTime() > then.getTime();
        var dif = inThePast ? now.getTime() - then.getTime() : then.getTime() - now.getTime();

        var diffSeconds = dif / 1000;
        var secondsBetween = Math.abs(diffSeconds).toFixed();
        var minutes = (secondsBetween / 60).toFixed();
        var hours = (minutes / 60).toFixed();
        var days = (hours / 24).toFixed(2);
        var weeks = (days / 7).toFixed(2);
        var months = (days / 30).toFixed(2);
        var years = (months /12).toFixed(2);
        
        var nanoSeconds = (secondsBetween * 1000000000).toFixed();
        var shakes = (nanoSeconds / 10).toFixed();
        var dogYears = (days /52).toFixed();
        var microFortnight = (secondsBetween /1.2).toFixed(2);
        var nanoCentury = (secondsBetween /  3.155).toFixed(2);
        
        
        var secondsAsWords = toWords(secondsBetween);
        var minutesAsWords = toWords(minutes); 
        var hoursAsWords = toWords(hours);
        var daysAsWords = toWords(days);
        var weeksAsWords = toWords(weeks);
        var monthsAsWords = toWords(months);
        var yearsAsWords = toWords(years);
        
        var nanoSecondsAsWords = toWords(nanoSeconds); 
        var shakesAsWords = toWords(shakes);
        var dogYearsAsWords = toWords(dogYears);
        var microFortnightAsWords = toWords(microFortnight);
        var nanoCenturyAsWords = toWords(nanoCentury);
        
        function toWords(num) {
          try {
            return nw.toWords(num);
          } catch(err) {
            console.log(err);
            return 'huge number';
          } 
        }
        
        answerText.html(inThePast ? 
        '<p>That was ' + secondsAsWords  + ' (' + secondsBetween + ') seconds ago</p>' +
        '<p>Or '+ minutesAsWords + ' (' + minutes + ') minutes ago</p>' +
        '<p>Or '+ hoursAsWords + ' (' + hours + ') hours ago</p>' + 
        '<p>Or '+ daysAsWords + ' (' + days + ') days ago</p>' + 
        '<p>Or '+ weeksAsWords + ' (' + weeks + ') weeks ago</p>' + 
        '<p>Or '+ monthsAsWords + ' (' + months + ') months ago</p>' + 
        '<p>Or '+ yearsAsWords + ' (' + years + ') years ago</p>' + 
        '<p>Or '+ dogYearsAsWords + ' (' + dogYears + ') dog years ago</p>' +
        '<p>Or '+ nanoSecondsAsWords + ' (' + nanoSeconds + ') nano seconds ago</p>' + 
        '<p>Or '+ shakesAsWords + ' (' + shakes + ') shakes ago</p>' + 
        '<p>Or '+ microFortnightAsWords + ' (' + microFortnight + ') microfortnights ago</p>' + 
        '<p>Or '+ nanoCenturyAsWords + ' (' + nanoCentury + ') nanocenturies ago</p>'
        
        : 
        '<p>That is ' + secondsAsWords  + ' (' + secondsBetween + ') seconds away</p>' +
        '<p>Or '+ minutesAsWords + ' (' + minutes + ') minutes away</p>' +
        '<p>Or '+ hoursAsWords + ' (' + hours + ') hours away</p>' + 
        '<p>Or '+ daysAsWords + ' (' + days + ') days away</p>' + 
        '<p>Or '+ weeksAsWords + ' (' + weeks + ') weeks away</p>' + 
        '<p>Or '+ monthsAsWords + ' (' + months + ') months away</p>' + 
        '<p>Or '+ yearsAsWords + ' (' + years + ') years away</p>' + 
        '<p>Or '+ dogYearsAsWords + ' (' + dogYears + ') dog years away</p>' +
        '<p>Or '+ nanoSecondsAsWords + ' (' + nanoSeconds + ') nano seconds away</p>' + 
        '<p>Or '+ shakesAsWords + ' (' + shakes + ') shakes away</p>' + 
        '<p>Or '+ microFortnightAsWords + ' (' + microFortnight + ') microfortnights away</p>' + 
        '<p>Or '+ nanoCenturyAsWords + ' (' + nanoCentury + ') nanocenturies away</p>'
        );
        answer.show( "slow" );
    }).on('clearDate', function () {
      answer.hide( "slow" );
    });

});
