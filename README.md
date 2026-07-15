# 뷰티 비즈니스 UX 스튜디오 랜딩페이지

다크 에디토리얼 톤의 반응형 랜딩페이지입니다. 외부 프레임워크 없이 HTML, CSS, JavaScript만으로 구현했습니다.

## 파일 구조

- `index.html`: 시맨틱 HTML5 마크업과 섹션 콘텐츠
- `styles.css`: 디자인 토큰, 반응형 레이아웃, 상태 스타일
- `script.js`: Sticky Header, 모바일 Drawer, 탭, FAQ Accordion, Scroll Reveal

## 실행 방법

```bash
python3 -m http.server 4173
```

브라우저에서 `http://127.0.0.1:4173`으로 접속합니다.

## 검증 기준

- 1920px, 960px, 390px 뷰포트에서 레이아웃 확인
- 가로 스크롤 없음
- 텍스트 잘림 없음
- CTA, 모바일 메뉴, 탭, FAQ 버튼 동작 확인
