document.addEventListener('DOMContentLoaded', () => {
  const aboutContent = document.getElementById('aboutContent');
  const titleElem = document.querySelector('.about-title');

  const pageParam = new URLSearchParams(window.location.search).get('page') || 'intro';

  const contentMap = {
    intro: {
      title: '',
      body: `
        <main class="site-intro">
          <!-- 히어로 섹션 -->
          <section class="intro-hero">
            <h1>👻 괴담지옥에 오신 것을 환영합니다</h1>
            <p>소름 돋는 괴담과 실화를 모아, 당신의 밤을 더욱 짜릿하게 만들어 줄 공포 허브</p>
          </section>
        
          <!-- 사이트 소개 -->
          <section class="intro-about">
            <h2>🕯️ 우리 사이트는…</h2>
            <p>
              괴담지옥은 단순한 이야기 모음이 아닙니다.  
              한국 괴담부터 해외 괴담, 실제 목격담까지  
              <strong>다양한 공포 스펙트럼</strong>과,
              <strong>사용자 참여형 콘텐츠</strong>를 통해
              <em>‘특별한 경험’</em> 을 선사하는 공간이에요.
            </p>
          </section>
        
          <!-- 주요 기능 -->
          <section class="intro-features">
            <h2>🔍 주요 기능</h2>
            <ul class="features-list">
              <li>
                <span class="feature-image" data-img="image/photo-genre.webp"></span>
                <strong>다양한 장르</strong><br>
                한국 괴담·해외 괴담·실화 이야기·사용자 제보까지  
                <em>모든 공포 장르를 한눈에.</em>
              </li>
              <li>
                <span class="feature-image" data-img="image/photo-submit.webp"></span>
                <strong>사용자 제보</strong><br>
                당신이 직접 경험한 기이한 사건도  
                <em>언제든 제보</em>하고 공유할 수 있어요.
              </li>
              <li>
                <span class="feature-image" data-img="image/photo-audio.webp"></span>
                <strong>몰입형 오디오</strong><br>
                공포 내레이터와 배경음악으로  
                <em>현장감 100%</em>를 느껴보세요.
              </li>
              <li>
                <span class="feature-image" data-img="image/photo-curation.webp"></span>
                <strong>큐레이션 & 분류</strong><br>
                주제·난이도·인기 필터로  
                <em>내 취향에 딱 맞는 이야기</em>만 쏙쏙.
              </li>
              <li>
                <span class="feature-image" data-img="image/photo-community.webp"></span>
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
            <a href="urban.html?filter=all" class="btn btn-primary">전체 괴담 보기</a>
          </section>
        </main>
      `
    },
    greeting: {
      title: '운영자 인사말',
      body: `
            <p>안녕하세요, 괴담지옥을 운영하는 <strong>오하준/이준혁/권오현</strong>입니다.</p>
            <p>어릴 적 친구들이 들려주던 오싹한 이야기들이 머릿속에서 떠나지 않아,  
               “진짜 소름” 을 찾아 헤매던 저희들은 이 공간을 만들게 되었습니다.</p>
            <p>괴담지옥은 단순한 모음집이 아니라,  
               <em>“공포를 함께 즐기고, 또 나누는 커뮤니티”</em> 가 되길 바랍니다.</p>
            <p>여러분의 생생한 제보와 뜨거운 피드백이 모여야만  
               이곳만의 특별한 공간간이 완성됩니다.</p>    
            <p>무서운 밤 속에서도 즐거운 추억을 쌓으시길
            </p>
      `
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
