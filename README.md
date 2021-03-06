# 문서

## 0. 프로젝트 실행 방법

1. 프로젝트 다운로드 후 압축해제
2. 프로젝트 폴더에서 터미널 명령어 실행
   1. `npm run install` : 패키지 설치(nodejs가 설치돼 있어야 합니다)
   2. `npm run dev` : json-server와 프로젝트가 동시에 실행됩니다
3. 브라우저에서 `http://localhost:5174` 주소로 접속

### 0.A 로그인 ID, PASSWORD

아래 id로 로그인하거나 회원가입 해서 로그인합니다.

로그인 정보는 local환경의 json-server에 저장됩니다.

> email : `test@t.co`
>
> password : `asd123!@`

### 0.B. 실행이 안될 때

아래 경고가 나오며 실행이 안된다면 node_modules와 package-lock.json파일을 삭제 후 다시 패키지 설치부터 진행하면 해결된다. [참조, esbuild와 vite의 종속성 문제](https://stackoverflow.com/questions/71837533/why-vite-js-doesnt-work-when-i-use-npm-run-dev)

```bash
sh: vite: command not found
```

## 1. 요구사항

### 1.A. 선발 과제

- [x] **Local Storage** 를 활용하여 유저 데이터를 처리
- [x] **Data Fetching**을 활용하여 필요한 데이터를 호출
- [x] **Routing**을 활용하여 유저 로그인 상태에 따른 페이지 이동

### 1.B. 영화 정보 사이트

- [x] **data fetching module** 구현
- [x] **검색 기능** 구현
  - 검색 결과 없는 경우 "검색 결과가 없습니다" 표시
- [x] **즐겨찾기** 구현
- [x] 화면 최하단에 **infinity scroll** 구현

---

### 1.C. 검색어 추천

- 간단한 검색어 추천 로직을 만들 수 있다.

  - [x] 검색어를 입력하면 입력된 문자열을 통해 데이터에서 추천 검색어를 출력
  - [x] 검색어가 없을 시 “검색어 없음”으로 노출
  - [x] API 호출을 최소화(debounce)
  - [x] fuzzy string matching

  예 ) 입력 : 간 추천검색어: 간염, 간암, 간성, 간질병,

---

## 2. Git commit convention

참조: [Udacity Git Commit Message Style Guide](https://udacity.github.io/git-styleguide/)

```
type: Subject

body

footer
```

```
feat: add user models

개인화 기능에 필요해 user models을 추가함

Resolves: #12
See also: #23, #24
```

### 2.A. 자세한 내용

#### 2.A.1 **Type**

| 종류     | 내용                                                  | 기타                          |
| -------- | ----------------------------------------------------- | ----------------------------- |
| feat     | 파일, 폴더, 새로운 기능 추가                          |
| fix      | 버그 수정                                             |
| docs     | 문서 생성, 추가, 수정                                 |
| style    | 포멧팅, 빠진 세미콜론 추가 등 코드 스타일 변경        | 코드의 변화는 없다            |
| refactor | 리팩토링                                              |
| test     | 테스트 코드 추가 및 리펙토링                          | production code의 변화는 없다 |
| chore    | build 작업, 패키지 관리, JSON데이터 포멧, CSS 변경 등 | production code의 변화는 없다 |
| conf     | .env, .gitignore 추가                                 |
| rename   | 파일 혹은 폴더명 수정, 옮기는 작업만 한 경우          |
| remove   | 파일 삭제                                             |

#### 2.A.2. **The Subject**

주제는 50자 미만으로 하고, 대문자로 시작해 마지막에 마침표는 쓰지 않는다. 명령적인 문장을 사용해 커밋이 무엇을 했는지 설명하기보다 하는 일을 설명한다. 예시, use change; not changed or changes.

#### 2.A.3. **The Body**

몸통에는 커밋에 설명이나 상황이 필요할 때만 사용한다. 어떻게 했는지가 아니라 한 일의 내용과 이유를 설명한다.
몸통과 주제 사이에 빈 줄이 필요 하고 각 줄의 길이는 72자 이하로 한다

#### 2.A.4. **The Footer**

바닥글은 선택사항이고 issue tracker IDs를 참조하는데 사용한다

## 3. Git branch convention

새 작업을 할 때 브랜치를 만들고 작업 후 PR한다. 이때 새 브랜치 이름은 할일을 적는다. 띄워쓰기가 필요한 경우 공백을 사용할 수 없기 때문에 `_`를 사용한다.

### 3.A. 의문

#### 3.A.1. 브랜치 이름이 중복된다면?

동일한 작업을 할 때 브랜치 이름이 똑같으면 어떻게 분간할지 의문이 생겼다. 브랜치 이름에 번호나 날짜를 써야 될까? git branch 전략인 git-flow, github-flow를 보니 브랜치는 임무를 마치면 삭제되고 직접 PR, merge를 해보니 커밋 기록에 브랜치 이름이 ~~남지 않는다. 그래서 크게 신경쓰지 않아도 될 것 같다.~~ Git graph에서 보인다. 어딘가 남긴 하지만 일단 필요성이 크게 와닿지 않아 **할 일**만 써보도록 한다

**결론**: 작업 후 브랜치는 삭제될거고, 커밋에 브랜치 이름이 기록되지 않으니 브랜치 이름이 중복되는 건 신경쓰지 말고 그냥 **할 일**을 적는다.

## 참조

- [git flow 사용법](https://blckchainetc.tistory.com/352)
- [Github markdown formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [git book](https://git-scm.com/book/ko/v2)
- [git - 간편 안내서](http://rogerdudler.github.io/git-guide/index.ko.html)

**패키지**

- [Vite](https://vitejs-kr.github.io)
- [JSON Server](https://github.com/typicode/json-server)
- [axios](https://axios-http.com/kr/)
- [React Router](https://reactrouter.com/docs/en/v6)
- [styled components](https://styled-components.com)
