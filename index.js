$(document).ready(function () {

    var today = moment();
    $("#currentDay").text(today.format("MMM Do, YYYY"));

    function colorCodedTime() {

        var currentHour = moment().hour()
        console.log(currentHour)

        let timeID = ['#0900', '#1000', '#1100', '#1200', '#1300', '#1400', '#1500', '#1600', '#1700']
        let momentTime = [9, 10, 11, 12, 13, 14, 15, 16, 17]

            for (let i = 0; i < timeID.length; i++) {
    
                if (momentTime[i] === currentHour) {
                    $(timeID[i]).addClass('present')
                  } else if (momentTime[i] < currentHour) {
                    $(timeID[i]).addClass('past')
                  } else if (momentTime[i] > currentHour) {
                    $(timeID[i]).addClass('future')
                  }
        
            }

    }

    colorCodedTime();

});