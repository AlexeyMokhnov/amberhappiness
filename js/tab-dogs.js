(function () {
    // оборачивание для безопасности
    const tabs = document.querySelectorAll(".dogs__tabs-item");
    const contents = document.querySelectorAll(".dogs__content-item");
  
    // forEach позволяет выполнить переданную функцию один раз для каждого элемента в массиве в порядке возрастания индекса.active
    tabs.forEach((tab, index) => {
      tab.onclick = () => {
        //при нажатии на элемент tab из массива, он получает индекс и передает его в функцию changeTab
        changeTab(index);
      };
    });
  
    //функция changeTab принимает индекс и вызывает фунции которые передают значения tabs - то есть массив и передает индекс массива, какой-то tab на который нажали
    function changeTab(index) {
      setActiveClass(tabs, index);
      setActiveClass(contents, index);
    }
  
    //Установить Активный Клса (массив-получает из предыдущей функции, index-так же)
    function setActiveClass(arr, index) {
      for (let el of arr) {
        //для каждого элемента из массива удалить класс активный, потом его добавить по текущему индексу
        el.classList.remove("active");
      }
      arr[index].classList.add("active");
    }
  })();
  