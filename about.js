document.addEventListener('DOMContentLoaded', () => {
  const aboutContent = document.getElementById('aboutContent');
  const titleElem = document.querySelector('.about-title');

  const pageParam = new URLSearchParams(window.location.search).get('page') || 'intro';

  const contentMap = {
    intro: {
      title: '사이트 소개',
      body: `
        <main class="site-intro">
          <!-- 히어로 섹션 -->
          <section class="intro-hero">
            <h1>👻 괴담지옥에 오신 것을 환영합니다</h1>
            <p>세계 곳곳의 소름 돋는 괴담과 실화를 모아, 당신의 밤을 더욱 짜릿하게 만들어 줄 공포 허브</p>
          </section>
        
          <!-- 사이트 소개 -->
          <section class="intro-about">
            <h2>🕯️ 우리 사이트는…</h2>
            <p>
              괴담지옥은 단순한 이야기 모음이 아닙니다.  
              한국 괴담부터 해외 괴담, 실제 목격담까지  
              <strong>다양한 공포 스펙트럼</strong>을 꿰뚫어,  
              <em>‘진짜 소름’</em>을 선사하는 공간이에요.
            </p>
          </section>
        
          <!-- 주요 기능 -->
          <section class="intro-features">
            <h2>🔍 주요 기능</h2>
            <ul class="features-list">
              <li>
                <span class="feature-image" data-img="image/genre.jpg"></span>
                <strong>다양한 장르</strong><br>
                한국 괴담·해외 괴담·실화 이야기·사용자 제보까지  
                <em>모든 공포 장르를 한눈에.</em>
              </li>
              <li>
                <span class="feature-image" data-img="image/submit.jpg"></span>
                <strong>사용자 제보</strong><br>
                당신이 직접 경험한 기이한 사건도  
                <em>언제든 제보</em>하고 공유할 수 있어요.
              </li>
              <li>
                <span class="feature-image" data-img="image/audio.jpg"></span>
                <strong>몰입형 오디오</strong><br>
                공포 내레이터와 배경음악으로  
                <em>현장감 100%</em>를 느껴보세요.
              </li>
              <li>
                <span class="feature-image" data-img="image/curation.jpg"></span>
                <strong>큐레이션 & 분류</strong><br>
                주제·난이도·인기 필터로  
                <em>내 취향에 딱 맞는 이야기</em>만 쏙쏙.
              </li>
              <li>
                <span class="feature-image" data-img="images/community.jpg"></span>
                <strong>실시간 소통</strong><br>
                댓글·좋아요로  
                <em>다양한 사용자들과</em> 즐겨보세요.
              </li>
            </ul>
          </section>
        
          <!-- 참여 유도 -->
          <section class="intro-cta">
            <h2>😈 지금 바로 체험해 보세요!</h2>
            <p>방을 어둡게 하고, 헤드폰을 끼워 보세요.  
               괴담지옥이 준비한 무서운 밤이 시작됩니다.</p>
            <a href="community.html?board=free" class="btn btn-primary">자유게시판으로 가기</a>
          </section>
        </main>
      `
    },
    greeting: {
      title: '운영자 인사말',
      body: `안녕하세요. 괴담지옥을 운영하는 운영자입니다.<br>
             공포를 사랑하는 모든 분들과 함께 이 공간을 만들어가고 싶습니다.`
    },
    contact: {
      title: '문의/제보하기',
      body: `문의사항이나 괴담 제보는 아래 이메일로 보내주세요.<br>
             <strong>contact@ghojamhell.com</strong>`
    }
  };

  const selected = contentMap[pageParam] || contentMap.intro;

  if (titleElem) titleElem.textContent = selected.title;
  if (aboutContent) aboutContent.innerHTML = selected.body;

  const aboutMenu = document.getElementById('aboutMenu');
  if (aboutMenu) {
    aboutMenu.querySelectorAll('.submenu a').forEach(link => {
      link.addEventListener('click', function(e){
        e.preventDefault();
        const url = new URL(this.href);
        const newPage = url.searchParams.get('page') || 'intro';
        const newData = contentMap[newPage] || contentMap.intro;
        window.history.pushState({}, '', url.pathname + url.search);
        if (titleElem) titleElem.textContent = newData.title;
        if (aboutContent) aboutContent.innerHTML = newData.body;
      });
    });

    window.addEventListener('popstate', () => {
      const newPage = new URLSearchParams(window.location.search).get('page') || 'intro';
      const newData = contentMap[newPage] || contentMap.intro;
      if (titleElem) titleElem.textContent = newData.title;
      if (aboutContent) aboutContent.innerHTML = newData.body;
    });
  }
});
