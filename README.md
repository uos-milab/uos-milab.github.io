https://uos-milab.gihub.io

# MILab Website

서울시립대학교 Machine Intelligence Lab의 정적 홈페이지입니다.

- 순수 HTML, CSS, JavaScript로 구성되어 별도 설치나 빌드가 필요 없습니다.
- Home, Members, Research, Publications, Gallery, Contact를 각각 독립된 페이지로 구성했습니다.
- 기존 MILab 사이트의 구성원 사진과 논문 대표 이미지 21장을 로컬 이미지로 포함했습니다.
- 파란색·흰색 디자인 시스템, 모바일 메뉴, 홈 연구 하이라이트 캐러셀을 지원합니다.
- 모든 경로가 상대 경로라 GitHub Pages와 Cloudflare Pages에서 그대로 동작합니다.

## 페이지 구성

- `index.html`: Home
- `members.html`: Members
- `research.html`: Research
- `publications.html`: Publications
- `gallery.html`: Gallery
- `contact.html`: Contact

## 로컬에서 확인

`index.html`을 브라우저로 직접 열어도 됩니다. 로컬 서버로 확인하려면 프로젝트
폴더에서 아래 명령 중 하나를 실행하세요.

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다.

## 콘텐츠 수정

- 구성원과 논문 데이터: `script.js`
- 페이지 문구와 연락처: 각 HTML 파일
- 색상과 레이아웃: `styles.css`
- 구성원 사진: `assets/images/members/`
- 논문 대표 이미지: `assets/images/publications/`
- Home 대표 이미지: `assets/images/hero-machine-vision.webp`
- Gallery 사진: `gallery.html`의 `.gallery-placeholder`를 실제 `<img>` 요소로 교체

## GitHub Pages

이 폴더의 파일을 저장소 최상위에 올리고 저장소의 Pages 설정에서 배포 소스를
선택합니다. 빌드 과정이 없는 정적 사이트이므로 루트의 `index.html`이 바로
서비스됩니다.

## Cloudflare Pages

자동 배포를 원하면 Git 저장소를 Pages 프로젝트에 연결합니다. 프레임워크는
선택하지 않고, Build command는 `exit 0`, Build output directory는 이 폴더를
저장소 최상위에 두었다면 `.`, 하위 폴더에 두었다면 해당 폴더 경로를 지정합니다.

Git 연결 없이 바로 확인하려면 Cloudflare Workers & Pages의 Direct Upload에서
이 폴더 전체를 드래그 앤 드롭할 수도 있습니다. Direct Upload로 만든 프로젝트는
나중에 Git integration 방식으로 전환할 수 없으므로, 지속적으로 업데이트할
홈페이지라면 처음부터 Git integration을 권장합니다.

## 배포 전 확인할 항목

- `script.js`에 공개된 구성원 정보가 최신인지 확인
- 새 논문이나 구성원이 생기면 데이터와 사진을 함께 추가
- 실제 배포 주소가 정해지면 각 페이지의 메타데이터와 공유 이미지 경로 확인
- 커스텀 도메인 사용 시 해당 서비스의 DNS 안내에 따라 레코드 연결
