var Index2 = 0;
      slide2();

      function slide2() {
        var i;
        var x = document.getElementsByClassName("mySlides2");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        Index2++;
        if (Index2 > x.length) {
          Index2 = 1;
        }
        x[Index2 - 1].style.display = "block";
        setTimeout(slide2, 2000); // Change image every 2 seconds
      }