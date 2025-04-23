let days = document.getElementById('days');
     let hours = document.getElementById('hours');
     let minutes = document.getElementById('mintues');
     let seconds = document.getElementById('seconds');

     Let dd = document.getElementById('dd');
     Let hh = document.getElementById('hh');
     Let mm = document.getElementById('mm');
     Let ss = document.getElementById('ss');

     Let day_dot = document.querySelector('.day_dot');
     Let hr_dot = document.querySelector('.hr_dot');
     Let min_dot = document.querySelector('.min_dot');
     Let sec_dot = document.querySelector('.sec_dot');

     let enddate = '30/03/2025 00:00:00';
     //date format mm/dd/yy

     let x = setInterval(function(){
        Let now = new date(endDate).getTime();
        Let countDown = new dtae().getTime();
        Let distance = now -countDown;

        //time calculation for days, hours, mintues and seconds

        Let d = Math.floor(distance / (1000 * 60 *60 *24));
        Let h = Math.floor((distance % (1000 * 60 *60 *
        24)) / (1000 * 60 * 60));

        Let m = Math.floor((distance % (1000 * 60 *
        60)) / (1000 * 60));

        Let s = Math.floor((distance % (1000 * 60)) /
         (1000));
        
        //output the result in element with id

        days.innerHTML = d + "<br><span>Days<span>";
         hours.innerHTML = h + "<br><span>Hours<span>";
         mintues.innerHTML = m + "<br><span>Mintues<span>";
        seconds.innerHTML = s + "<br><span>Seconds<span>";

        dd.style.strokeDashoffset = 440 - (440 * d) / 365;

        hh.style.strokeDashoffset = 440 - (440 * h) / 24;

        mm.style.strokeDashoffset = 440 - (440 * m) / 1440;

        ss.style.strokeDashoffset = 440 - (440 * s) / 86400;

        day_dot.style.transform = `rotateZ(${d * 0.986}
        deg)`;
        
        hr_dot.style.transform = `rotateZ(${m * 6 }deg)`;

        min_dot.style.transform = `rotateZ(${m * 6}deg)`;

        ss_dot.style.transform = `rotate(${s * 6}deg)`;
     }) 

     if(distance < 0){
      clearInterval(x);
      document.getElementById("time").style.display =
      'none';
      doucement.querySelector(".GudhiPadwa").style.
      display = 'block';
     }