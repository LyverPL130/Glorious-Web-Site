document.addEventListener('DOMContentLoaded', function() {
    const introductionDiv = document.getElementById('introduction');
    const commandContentDiv = document.getElementById('command-content');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const defaultTitle = document.querySelector('.content h1');
    const defaultSubtitle = document.querySelector('.content h2');

    const introductions = {
      t1: '<h1>這是類型 t1 的介紹。</h1>',
      t1_c1: '<h1>這是類型 t1，類別 c1 的介紹。</h1>',
      t1_c2: '<h1>這是類型 t1，類別 c2 的介紹。</h1>',
      t2: '<h1>這是類型 t2 的介紹。</h1>',
      t2_c1: '<h1>這是類型 t2，類別 c1 的介紹。</h1>',
    };
  
    const commandContents = {
      t1_c1_cm1: '<h1>指令 1 標題</h1><p>這是指令 1 的內容。<br>這是換行。</p><img src="../file/picture/logo.png" alt="logo">',
      t1_c1_cm2: '<h1>指令 2 標題</h1><p>這是指令 2 的內容。</p><img src="../file/picture/logo.png" alt="logo">',
      t1_c1_cm3: '<h1>指令 3 標題</h1><p>這是指令 3 的內容。</p><img src="../file/picture/logo.png" alt="logo">',
      t1_c2_cm1: '<h1>指令 4 標題</h1><p>這是指令 4 的內容。</p><img src="../file/picture/logo.png" alt="logo">',
      t1_c2_cm2: '<h1>指令 5 標題</h1><p>這是指令 5 的內容。</p><img src="../file/picture/logo.png" alt="logo">',
      t2_c1_cm1: '<h1>指令 6 標題</h1><p>這是指令 6 的內容。</p><img src="../file/picture/logo.png" alt="logo">',
    };
  
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const type = this.getAttribute('data-type');

      // 隱藏預設標題和副標題
      defaultTitle.style.display = 'none';
      defaultSubtitle.style.display = 'none';

      if (introductions[type]) {
        introductionDiv.innerHTML = `<p>${introductions[type]}</p>`;
      } else {
        introductionDiv.innerHTML = '';
      }

      if (commandContents[type]) {
        commandContentDiv.innerHTML = commandContents[type];
      } else {
        commandContentDiv.innerHTML = '';
      }
    });
  });

  // 頁面載入時，顯示預設標題和副標題
  if (sidebarLinks.length > 0) {
    defaultTitle.style.display = 'block';
    defaultSubtitle.style.display = 'block';
  }
});