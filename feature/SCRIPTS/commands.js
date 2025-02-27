document.addEventListener('DOMContentLoaded', function() {
    const introductionDiv = document.getElementById('introduction');
    const commandContentDiv = document.getElementById('command-content');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const defaultTitle = document.querySelector('.content h1');
    const defaultSubtitle = document.querySelector('.content h2');

    const introductions = {
      t1: '這是類型 t1 的介紹。',
      t1_c1: '這是類型 t1，類別 c1 的介紹。',
      t1_c1_cm1: '這是類型 t1，類別 c1，內容 cm1 的介紹。',
      t1_c1_cm2: '這是類型 t1，類別 c1，內容 cm2 的介紹。',
      t1_c1_cm3: '這是類型 t1，類別 c1，內容 cm3 的介紹。',
      t1_c2: '這是類型 t1，類別 c2 的介紹。',
      t1_c2_cm1: '這是類型 t1，類別 c2，內容 cm1 的介紹。',
      t1_c2_cm2: '這是類型 t1，類別 c2，內容 cm2 的介紹。',
      t2: '這是類型 t2 的介紹。',
      t2_c1: '這是類型 t2，類別 c1 的介紹。',
      t2_c1_cm1: '這是類型 t2，類別 c1，內容 cm1 的介紹。',
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
        introductionDiv.innerHTML = '<p>找不到相關介紹。</p>';
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