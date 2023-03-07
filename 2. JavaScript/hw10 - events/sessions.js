let sessionsJSON = localStorage.getItem('sessions');
let sessionsParsed = JSON.parse(sessionsJSON);
for (const session of sessionsParsed) {
    let newDate = new Date(session)
    let wraper = document.createElement('div');
    let date = document.createElement('h3');
    let time = document.createElement('h4');

    const dateObj = format(newDate);
    date.innerText = `Date: ${dateObj.DD}.${dateObj.MM}.${dateObj.YYYY}`;
    time.innerText = `Time: ${dateObj.hh}:${dateObj.mm}:${dateObj.ss}`;
    wraper.classList.add('wrapper');
    date.classList.add('date');
    time.classList.add('time');

    wraper.append(date,time);
    console.log(wraper);
    document.body.appendChild(wraper);
}
function format(dateString) {
    const qwe = new Date(dateString);

    const YYYY = qwe.getFullYear().toString();
    const MM = (qwe.getMonth() + 1).toString();
    const DD = qwe.getDate().toString();
    const hh = qwe.getHours().toString();
    const mm = qwe.getMinutes().toString();
    const ss = qwe.getSeconds().toString();

    return {
        YYYY: YYYY,
        MM: MM.length < 2 ? `0${MM}` : MM,
        DD: DD.length < 2 ? `0${DD}` : DD,
        hh: hh.length < 2 ? `0${hh}` : hh,
        mm: mm.length < 2 ? `0${mm}` : mm,
        ss: ss.length < 2 ? `0${ss}` : ss,
    }
}
