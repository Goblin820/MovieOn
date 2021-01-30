var Index1 = 0;
      slide1();

      function slide1() {
        var i;
        var x = document.getElementsByClassName("mySlides1");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        Index1++;
        if (Index1 > x.length) {
          Index1 = 1;
        }
        x[Index1 - 1].style.display = "block";
        setTimeout(slide1, 2000); // Change image every 2 seconds
      }