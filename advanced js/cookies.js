const CookieHandler = {
    getCookie: function (cookieName) {
      const name = cookieName + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
          return cookie.substring(name.length, cookie.length);
        }
      }
      return null;
    },
  
    setCookie: function (cookieName, cookieValue, expiryDate) {
      let expires = "";
      if (expiryDate) {
        const date = new Date();
        date.setTime(date.getTime() + (expiryDate * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = `${cookieName}=${cookieValue}${expires}; path=/`;
    },
  
    deleteCookie: function (cookieName) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    },
  
    allCookieList: function () {
      return document.cookie.split(';').map(cookie => cookie.trim().split('=')[0]);
    },
  
    hasCookie: function (cookieName) {
      return this.getCookie(cookieName) !== null;
    }
  };
  
  function displayGreeting() {
    const userName = CookieHandler.getCookie('username');
    const visits = parseInt(CookieHandler.getCookie('visits')) || 0;
    const gender = CookieHandler.getCookie('gender');
    
    let greeting = `Welcome, ${userName || 'Guest'}!`;
    let profilePic = gender === 'male' ? '1.jpg' : '2.jpg';
    
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = greeting;
  
    const profilePicElement = document.getElementById('profile-pic');
    profilePicElement.setAttribute('src', profilePic);
  
    const visitsElement = document.getElementById('visits');
    visitsElement.textContent = `Number of visits: ${visits}`;
  
    const color = CookieHandler.getCookie('color') || 'black';
    greetingElement.style.color = color;
    visitsElement.style.color = color;
  }
  
  // Example usage:
  CookieHandler.setCookie('username', 'Ali');
  CookieHandler.setCookie('visits', CookieHandler.getCookie('visits') ? parseInt(CookieHandler.getCookie('visits')) + 1 : 1);
  CookieHandler.setCookie('gender', 'male');
  CookieHandler.setCookie('color', 'blue');
  displayGreeting();
  
  // Replace registration page with profile page
  if (window.location.href.includes('registration.html')) {
    window.location.replace('profile.html');
  }
  