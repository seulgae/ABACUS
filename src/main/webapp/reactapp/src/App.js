import React from 'react';
import './App.css';

// App.js에서 UI를 구현
// 연관된 코드를 조합하여 복잡한 태그를 하나의 태그로 이름을 붙여서 사용자 정의 tag를 사용할 수 있다.

//함수 정의 -> 컴포넌트
function Header(props){
    console.log('props', props, props.title);
    return <header>
        <h1><a href="/">{props.title}{/*표현식*/}</a></h1>
    </header>
}

// props(프롭s) -> 속성정의

function Nav(props){
    // 2. 배열을 담아올 변수 작성
    const lis = []

    // 3. list를 출력해야하기 때문에 반복문 선언
    for(let i = 0; i<props.topics.length; i++){
        let t = props.topics[i];
        // 4. 만든 변수에 li 태그 반복문 push
        // t.출력할 요소 props.topics[0] 인덱스의 해당 요소 출력
        lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
    }
    return <nav>
        <ol>
            {/* 출력요소 작성*/}
            {lis}
        </ol>
    </nav>
}

function Article(props){
    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}
function App() {
    // 1. 동적 배열 변수 선언
    // id값은 고유해야함.
    const topics = [
        {id: 1, title:'현근님의 좋아하는 여자', body:'박성수'},
        {id: 2, title:'현근님의 좋아하는 남자', body:'박성수'},
        {id: 3, title:'현근님이 좋아하는 음식', body:'볶음밥'}
    ]
    return (
        <div>
            <Header title="현근님의 메인페이지"></Header> {/* 사용자의 정의 tag 사용 */}
            <Nav topics={topics}></Nav> {/* 사용자의 정의 tag 사용 */}
            <Article title="Welcome" body="Hello, WEB"></Article> {/* 사용자의 정의 tag 사용 */}
        </div>
    );
}

export default App;
