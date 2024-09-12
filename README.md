# 2024년 2학기 중간고사 시험 과목 리스트 만들기

UI : 기본 TodoList UI에 10월 16일, 10월 17일 날짜를 선택할 수 있는 UI가 추가되어야 함

시험과목저장시 ID 시작은 0부터, Mock Data 없음

## 기능
- 날짜를 선택하고 과목명을 입력하면 해당날짜로 과목이 중간고사 시험 과목 리스트에 추가되어야 함, 추가버튼 클릭, 엔터클릭 모두 입력되어야 함
- 과목명으로 검색하면 검색이 되어야 함 : TodoList의 기본 검색기능과 동일하게
- 추가된 시험 과목 리스트에서 체크박스를 클릭하면 시험 친 과목으로 수정된 것을 보여주기 위해서 글자색을 회색으로 바꾸거나 과목명을 가로지르는 중간선이 들어가서 수정된 것을 눈으로 확인할 수 있어야 함.
- 삭제버튼을 클릭하면 시험 과목 리스트에서 삭제되어야 함

## 필수 사항
- 필수 사용 Hooks : App.jsx(useReducer, useCallback, useRef), List 출력컴포넌트(useState), Editor(useState, useRef)
- 최적화 필수 : useCallback, React.memo등
- reducer 함수 사용

위에 언급되지 않은 내용외의 것은 **TodoList** 만들기에서 한 것을 기본으로 한다.
