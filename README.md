# Vling - InternShip

## 🖥 1. 시연 영상
- https://youtu.be/9h_1mY52tC4

## 🔖 2. 프로젝트 소개

### 2.1. 목표
- 유튜브의 동영상 플레이 목록을 키워드를 기반으로 검색하여 재생목록을 생성하여 동영상 리뷰처럼 리스트업

### 2.2. 구현사항
- 영상 제생목록을 가로로 무한 pagination
- 마우스 호버시 미리보기 기능
- 클라이언트 영역 크기에 따른 동적인 layout 구성
- YouTube 영상 embedded player 구현

## 2.3. 기술 스택
- graphql apollo client
- redux
- react
- module.css

## 📎 3. 초기세팅

### 3.1. .env 세팅
REACT_APP_EC2_SERVER="" <br/>
REACT_APP_LOCAL_SERVER=""

### 3.2. 공통 convention branch 형식
- fe/feature/{}

## 💡 4. 개발후기
### 4.1. 얻게된 점
- redux를 사용하여 상태관리 및 props 전달 방법
- GraphQL의 Apollo Client를 통한 data fetching 및 작동원리
- YouTube Library의 다양성 및 오픈 api 경험
- react hook - useRef의 이해  observe 기능을 통한 무한스크롤 구현 방법
### 4.2. 아쉬운 점
- plugin module화에 대한 지식 부족
- react bundling의 이해 및 webpack 지식 
