# 정리 notion
## [링크](https://www.notion.so/Payments-83a2b5124edb44e99a4dcccdc5096ac2)

<br>

# 목표
## 전체
- [접근성](https://ko.reactjs.org/docs/accessibility.html)을 고려한 코드를 작성해본다.
- [husky](https://www.huskyhoochu.com/npm-husky-the-git-hook-manager/), [lint-staged](https://www.huskyhoochu.com/how-to-use-lint-staged/)를 사용해 코드 스타일을 관리한다.
## CSS
- [BEM](https://nykim.work/15) 방법론을 사용하여 작명한다.
## React
- Component Driven Development에 적응한다.
- 재사용 가능한 컴포넌트를 작성한다.
- [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/ko/get-started/)을 이용해 컴포넌트를 테스트한다. ([참고](https://velog.io/@velopert/design-system-using-typescript-and-storybook))
- React [Hooks API](https://ko.reactjs.org/docs/hooks-reference.html)를 활용하여 class 대신 function 기반으로 컴포넌트를 작성한다. ([소개](https://ko.reactjs.org/docs/hooks-reference.html))
- [제어 컴포넌트](https://ko.reactjs.org/docs/forms.html)와 [비제어 컴포넌트](https://ko.reactjs.org/docs/uncontrolled-components.html)의 특징을 파악하고 필요한 부분에 적용한다.
- props, state에 구조 분해 할당을 잘 적용해본다. ([참고](https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0))
- [Fragments](https://ko.reactjs.org/docs/fragments.html)를 적용할 만한 부분이 있으면 적용해본다.

<br>

# 요구사항 (1단계)
## 필수 구현
### 카드 추가 폼
- 카드 UI
  - form의 input값을 반영하여 실시간 수정

<br>

- 이름
  - 영문 대문자와 space만 입력받도록
- 카드 번호
  - 카드 번호 8자리를 입력하면 카드사 선택
- 유효기간
  - 유효한 날짜만 입력받아야 함
- 보안코드(CVC)
  - 마킹 처리
- 비밀번호 앞 2자리
  - 나머지 2자리는 마킹 처리
- 다음 버튼
  - form으로 관리하여 필요한 입력이 비어있을 시 넘어가지 않도록
- 등록 취소 버튼
  - 뒤로가기 (이 단계에서는 기능 없이 UI만 구현)

<br>

### 카드 추가 확인
- 카드 추가 폼에서 완성된 카드 UI 재활용
- 카드 별명 등록 input
  - placeholder를 등록해 별명을 입력받는 input임을 알 수 있도록
- 등록 완료 버튼
  - 카드 목록으로 (이 단계에서는 기능 없이 UI만 구현)
