document.addEventListener('DOMContentLoaded', function() {
    const introductionDiv = document.getElementById('introduction');
    const commandContentDiv = document.getElementById('command-content');
    const defaultTitle = document.querySelector('.content h1');
    const defaultSubtitle = document.querySelector('.content h2');
    const contentDiv = document.querySelector('.content');
  
    const introductions = {
      t1: '<h1>這是類型 t1 的介紹。</h1>',
      t1_c1: '<h1>這是類型 t1，類別 c1 的介紹。</h1>',
      t1_c2: '<h1>這是類型 t1，類別 c2 的介紹。</h1>',
      t2: '<h1>這是類型 t2 的介紹。</h1>',
      t2_c1: '<h1>這是類型 t2，類別 c1 的介紹。</h1>',
    };
  
    const commandContents = {
      t1: '<h2><a href="#t1_c1">分類1</a></h2><h2><a href="#t1_c1">分類2</a></h2>',
      t1_c1: '<h2><a href="#t1_c1_cm2">指令1</a></h2><h2><a href="#t1_c1_cm2">指令2</a></h2><h2><a href="#t1_c1_cm3">指令3</a></h2>',
      t1_c1_cm1: '<h1>指令 1 標題</h1><p>這是指令 1 的內容。<br>這是換行。</p><img src="/file/picture/logo.png" alt="logo">',
      t1_c1_cm2: '<h1>指令 2 標題</h1><p>這是指令 2 的內容。</p><img src="/file/picture/logo.png" alt="logo">',
      t1_c1_cm3: '<h1>指令 3 標題</h1><p>這是指令 3 的內容。</p><img src="/file/picture/logo.png" alt="logo">',
      t1_c2_cm1: '<h1>指令 4 標題</h1><p>這是指令 4 的內容。</p><img src="/file/picture/logo.png" alt="logo">',
      t1_c2_cm2: '<h1>指令 5 標題</h1><p>這是指令 5 的內容。</p><img src="/file/picture/logo.png" alt="logo">',
      t2_c1_cm1: '<h1>指令 6 標題</h1><p>這是指令 6 的內容。</p><img src="/file/picture/logo.png" alt="logo">',
    };
  
    // 讀取網址中的錨點
    const hash = window.location.hash.substring(1);
    if (hash) {
      updateContent(hash);
    }
  
    // 監聽 hashchange 事件
    window.addEventListener('hashchange', function() {
      const hash = window.location.hash.substring(1);
      updateContent(hash);
    });
  
    // 更新內容的函式
    function updateContent(href) {
      defaultTitle.style.display = 'none';
      defaultSubtitle.style.display = 'none';
  
      contentDiv.classList.add('content-active');
  
      if (introductions[href]) {
        introductionDiv.innerHTML = `<p>${introductions[href]}</p>`;
      } else {
        introductionDiv.innerHTML = '';
      }
  
      if (commandContents[href]) {
        commandContentDiv.innerHTML = commandContents[href];
      } else {
        commandContentDiv.innerHTML = '';
      }
  
      contentDiv.addEventListener('transitionend', function transitionEndHandler() {
        contentDiv.scrollTop = 0;
        contentDiv.removeEventListener('transitionend', transitionEndHandler);
      });
    }
  });