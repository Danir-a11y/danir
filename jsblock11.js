loadScript('/my/script.js', function(script) {

    alert(`Здорово, скрипт ${script.src} загрузился, загрузим ещё один`);
  
    loadScript('/my/script2.js', function(script) {
      alert(`Здорово, второй скрипт загрузился`);
    });
  
  });

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));

    document.head.append(script);
}