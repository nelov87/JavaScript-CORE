function attachEventsListeners() {
    let daysBotton = document.getElementById("daysBtn").addEventListener('click', convertFromDays);
    let hoursBotton = document.getElementById("hoursBtn").addEventListener('click', convertFromHours);
    let minutsBotton = document.getElementById("minutesBtn").addEventListener('click', convertFromMinuts);
    let secundsBotton = document.getElementById("secondsBtn").addEventListener('click', convertFromSecunds);

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');


    function convertFromDays() {


        hours.value = Number(days.value) * 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(minutes.value) * 60;
    }

    function convertFromHours() {

        days.value = Number(hours.value) / 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(minutes.value) * 60;
    }

    function convertFromMinuts() {

        hours.value = Number(minutes.value) / 60;
        days.value = Number(hours.value) / 24;
        seconds.value = Number(minutes.value) * 60;
    }

    function convertFromSecunds() {
        minutes.value = Number(seconds.value) / 60;
        hours.value = Number(minutes.value) / 60;
        days.value = Number(hours.value) / 24;

    }
}