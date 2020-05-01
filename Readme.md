# 유어슈 웹프론트 인큐베이팅 2 과제

## 유튜브 음악 플레이어

제공된 소스코드를 수정하여 유튜브의 즐겨찾는 음악들을 관리하고 재생하는 웹기반 데스크톱앱을 완성한다.

> `Material-UI`의 컴포넌트와 코드에 있는 컴포넌트 외에 필요한 컴포넌트는 직접 구현할 것.
> 기본코드에 제공된 컴포넌트를 사용하지 않아도 상관없음.

## 요구 기술

> 제공되는 소스코드에는 이미 포함되어 있으므로 따로 추가하는 작업을 할 필요는 없다.

아래 기술들을 조사하고 설명을 추가할 것.

- [TypeScript](https://www.typescriptlang.org/docs/home.html)
  설명작성
- [Yarn](https://yarnpkg.com/)
  설명작성
- [Webpack](https://webpack.js.org/concepts/)
  설명작성
- [React](https://ko.reactjs.org/tutorial/tutorial.html)
  설명작성
- [React Hook](https://ko.reactjs.org/docs/hooks-intro.html)
  설명작성
- [React-Router](https://reacttraining.com/react-router/web/guides/quick-start)
  설명작성
- [Redux](https://redux.js.org/introduction/getting-started)
  설명작성
- [Redux-Toolkit](https://redux-toolkit.js.org/)
  설명작성
- [Material-UI](https://material-ui.com/)
  설명작성
- [Electron](https://www.electronjs.org/docs)
  설명작성
- [IndexedDB](https://developer.mozilla.org/ko/docs/Web/API/IndexedDB_API/Using_IndexedDB)
  설명작성

## 기능 요구사항

- 재생 컨트롤
  유튜브 mp4파일 url을 얻어와서 재생한다.

  > 주의: youtube의 mp4 url은 임시 링크이므로 매번 재생시 새로 가져와야 한다.

  - 한곡/전체반복 재생: 동영상 하나 혹은 큐 목록 전체를 반복해서 재생
  - 랜덤재생: 큐에서 랜덤으로 선택 재생
  - 슬라이더
  - 볼륨조절
  - 자동으로 다음 곡 재생

- 큐: 현재 재생중인 동영상의 큐

  > **IndexedDB**에 저장하여 다음 실행시 복원한다.

  - 큐 비우기
  - 큐 목록 삭제

- 플레이리스트

  > **IndexedDB**에 저장하여 다음 실행시 복원한다.

  - 사용자에게서 유튜브동영상링크를 입력받고 정보를 받아와서 저장한다.
  - 플레이리스트 재생: 큐에 플레이리스트를 복사
  - 내보내기: 특정 플레이리스트 혹은 전체 리스트를 json파일로 받을수 있게 한다.
  - 불러오기: 내보낸 json파일을 불러온다.
  - 플레이리스트 삭제
  - 플레이리스트 항목 삭제

- 영상 제목 검색: Redux를 사용

- global한 상태는 Redux를 이용하여 관리한다.

## 프로그래밍 요구사항

Visual Studio Code를 사용하여 개발한다.

- 필요 확장 프로그램
  - [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## 프로젝트 구조

```sh
. # 프로젝트 루트
├── Readme.md # 설명파일
├── package.json # 패키지 메타데이터 정의
├── src # 소스코드 폴더
│   ├── index.html # electron html 엔트리 포인트
│   ├── main.ts # electron main process
│   └── renderer # electron renderer process
│       ├── api # API 모듈
│       │   └── youtubeApi.ts # Youtube API 모듈
│       ├── app # App 모듈
│       │   ├── App.tsx # App모듈
│       │   ├── rootReducer.ts # redux root reducer
│       │   ├── routes.tsx # page route 정의
│       │   └── store.ts # redux store 정의
│       ├── components # 순수 컴포넌트 모듈
│       │   └── PageAppBar.tsx # 페이지 AppBar
│       ├── features # 기능별 모듈 분리
│       │   ├── player # 음악 플레이어
│       │   │   ├── Controller.tsx # 음악 컨트롤러 영역
│       │   │   ├── Player.tsx # 플레이어 역역
│       │   │   ├── Video.tsx # 비디오 영역
│       │   │   └── playerSlice.ts # 플레이어 redux slice
│       │   ├── playlist # 재생목록
│       │   │   ├── PlayListFab.tsx # 비디오 추가버튼
│       │   │   ├── PlayListItemMenu.tsx # listItem
│       │   │   ├── PlayListView.tsx # listview
│       │   │   ├── PlaylistPage.tsx # pageview
│       │   │   └── playlistSlice.ts # playlist redux slice
│       │   ├── queue # 음악 큐
│       │   │   ├── QueuePage.tsx # pageview
│       │   │   ├── QueueTable.tsx # table
│       │   │   └── queueSlice.ts # queue redux slice
│       │   └── sidebar # 사이드바
│       │       ├── CreatePlaylistDialog.tsx # 재생목록 추가 다이얼로그
│       │       ├── Sidebar.tsx # 사이드바
│       │       ├── SidebarPlayList.tsx # 사이드바 재생목록 영역
│       │       └── SidebarPlayListItemMenu.tsx # 사이드바 재생목록 리스트 메뉴
│       ├── index.tsx # electron renderer process 엔트리포인트
│       ├── themes.ts # 테마 정의
│       └── utils # 유틸리티 모듈
│           └── timeUtils.ts # 시간변환 모듈
├── tsconfig.json # typescript 옵션
├── webpack.main.config.js # main process webpack 옵션
├── webpack.renderer.config.js # renderer process webpack 옵션
├── webpack.rules.js # webpack loader 규칙
└── yarn.lock # yarn lock파일
```
