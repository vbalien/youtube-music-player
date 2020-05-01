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
- [node-ytdl-core](https://github.com/fent/node-ytdl-core)
  유튜브의 영상 정보와 스트림을 얻어오는 nodejs용 라이브러리.

## 기능 요구사항

- 영상 재생
  `node-ytdl-core`를 이용해서 mp4파일의 url을 얻어와서 재생한다.

  > 주의: youtube의 mp4 url은 임시 링크이므로 매번 재생시 새로 가져와야 한다.

  - 큐: 현재 재생중인 동영상의 큐
  - 반복재생: 동영상 하나 혹은 큐를 반복해서 재생
  - 랜덤재생: 큐에서 랜덤으로 재생

- 플레이리스트
  - CRUD: IndexedDB를 사용하여 관리
    - 저장: 사용자에게서 유튜브동영상 ID를 입력받고 `node-ytdl-core`으로 동영상 정보를 받아와서 저장한다.
  - 플레이리스트 재생: 큐에 플레이리스트를 복사
  - 내보내기: 특정 플레이리스트 혹은 전체 리스트를 json파일로 받을수 있게 한다.
  - 불러오기: 내보낸 json파일을 불러온다.
- 영상 제목 검색: Redux를 사용
- global한 상태(ex: queue)는 Redux를 이용하여 관리한다.

## 프로그래밍 요구사항

Visual Studio Code를 사용하여 개발한다.

- 필요 확장 프로그램
  - [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
