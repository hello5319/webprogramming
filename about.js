document.addEventListener('DOMContentLoaded', () => {
  const aboutContent = document.getElementById('aboutContent');
  const titleElem = document.querySelector('.about-title');

  const pageParam = new URLSearchParams(window.location.search).get('page') || 'intro';

  const contentMap = {
    intro: {
      title: '사이트 소개',
      body: `<p>괴담지옥은 단순한 이야기 제공을 넘어 사용자 참여형 콘텐츠를 통한 특별한 경험을 제공하는 사이트입니다.</p>
      <ul>
        <li>📚 <strong>다양한 장르</strong>: 한국 괴담부터 해외 괴담, 실화 기반 이야기, 사용자 제보 괴담까지 폭넓게 수집</li>
        <li>🖋️ <strong>사용자 제보</strong>: 직접 체험한 기이한 경험이나 지역 괴담을 손쉽게 제보하고, 커뮤니티와 토론</li>
        <li>🔊 <strong>몰입형 오디오</strong>: 공포 배경음과 각 스토리에 어울리는 음성 내레이션으로 생생한 공포 분위기 제공</li>
        <li>🗂️ <strong>큐레이션 & 분류</strong>: 주제별, 난이도별로 정리된 스토리 목록으로 빠르고 손쉬운 탐색</li>
        <li>🌐 <strong>실시간 소통</strong>: 댓글, 좋아요 기능으로 다른 이용자와 감상평 교류, 인기 콘텐츠 랭킹 제공</li>
      </ul>
      <p>매주 새로운 괴담이 업데이트되며, 운영자가 엄선한 추천 목록을 통해 잊지 못할 공포 체험을 선사합니다.<br>
         공포를 좋아하는 사람이라면 누구나 지금 바로 괴담지옥에서 여러분만의 무서운 이야기를 찾아보세요!</p>`
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
