const OutValue = document.querySelector("#output");

setTimeout(() => {
  OutValue.innerHTML = "10";
  setTimeout(() => {
    OutValue.innerHTML = "9";
    setTimeout(() => {
      OutValue.innerHTML = "8";
      setTimeout(() => {
        OutValue.innerHTML = "7";
        setTimeout(() => {
          OutValue.innerHTML = "6";
          setTimeout(() => {
            OutValue.innerHTML = "5";
            setTimeout(() => {
              OutValue.innerHTML = "4";
              setTimeout(() => {
                OutValue.innerHTML = "3";
                setTimeout(() => {
                  OutValue.innerHTML = "2";
                  setTimeout(() => {
                    OutValue.innerHTML = "1";
                    setTimeout(() => {
                      OutValue.setAttribute("id", "font-color");
                      OutValue.innerHTML = "Happy Independence Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
