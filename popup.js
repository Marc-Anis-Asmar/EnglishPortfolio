window.onload = function() {
    // Get popup and close button elements
    var popupContainer = document.querySelector('.popup-container');
    var popupCloseBtn = document.querySelector('.popup-close-btn');
    var bodyy = document.querySelector('.pcontainer')
    
    // Show popup and add blur class to body
    popupContainer.style.display = "flex";
    // document.body.classList.add('blur');
    bodyy.classList.add('blur');
  
    
    // Close popup and remove blur class from body
    popupCloseBtn.onclick = function() {
      popupContainer.style.display = "none";
      bodyy.classList.remove('blur');
    }
  }
  