document.addEventListener('DOMContentLoaded', function() {
    const introductionDiv = document.getElementById('introduction');
    const functionContentDiv = document.getElementById('function-content'); // 修改這裡
    const defaultTitle = document.querySelector('.content h1');
    const defaultSubtitle = document.querySelector('.content h2');
    const contentDiv = document.querySelector('.content');
  
    const introductions = {
      f1: '<h1>這是功能類型 1 的介紹。</h1>', // 修改這裡
      f1_c1: '<h1>這是功能類型 1，功能類別 1 的介紹。</h1>', // 修改這裡
      f1_c2: '<h1>這是功能類型 1，功能類別 2 的介紹。</h1>', // 修改這裡
      f2: '<h1>這是功能類型 2 的介紹。</h1>', // 修改這裡
      f2_c1: '<h1>這是功能類型 2，功能類別 1 的介紹。</h1>', // 修改這裡
    };
  
    const functionContents = { // 修改這裡
      f1: '<h2><a href="#f1_c1">功能類別 1</a></h2><h2><a href="#f1_c2">功能類別 2</a></h2>', // 修改這裡
      f1_c1: '<h2><a href="#f1_c1_cm1">功能內容 1</a></h2><h2><a href="#f1_c1_cm2">功能內容 2</a></h2><h2><a href="#f1_c1_cm3">功能內容 3</a></h2>', // 修改這裡
      f1_c1_cm1: '<h1>功能內容 1 標題</h1><p>這是功能內容 1 的內容。<br>這是換行。</p><img src="../file/picture/logo.png" alt="logo">', // 修改這裡
      f1_c1_cm2: '<h1>功能內容 2 標題</h1><p>這是功能內容 2 的內容。</p><img src="../file/picture/logo.png" alt="logo">', // 修改這裡
      f1_c1_cm3: '<h1>功能內容 3 標題</h1><p>這是功能內容 3 的內容。</p><img src="../file/picture/logo.png" alt="logo">', // 修改這裡
      f1_c2_cm1: '<h1>功能內容 4 標題</h1><p>這是功能內容 4 的內容。</p><img src="../file/picture/logo.png" alt="logo">', // 修改這裡
      f1_c2_cm2: '<h1>功能內容 5 標題</h1><p>這是功能內容 5 的內容。</p><img src="../file/picture/logo.png" alt="logo">', // 修改這裡
      f2_c1_cm1: '<h1>功能內容 6 標題</h1><p>這是功能內容 6 的內容。</p><img src="../file/picture/logo.png" alt="logo">', // 修改這裡
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
  
      if (functionContents[href]) {
        functionContentDiv.innerHTML = functionContents[href];
      } else {
        functionContentDiv.innerHTML = '';
      }
  
      functionContentDiv.addEventListener('transitionend', function transitionEndHandler() { // 修改這裡
        functionContentDiv.scrollTop = 0; // 修改這裡
        functionContentDiv.removeEventListener('transitionend', transitionEndHandler); // 修改這裡
      });
    }
  });