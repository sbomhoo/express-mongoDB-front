# Express - mongoDB 서버 에서 react로 데이터 가져오기

### CORS 설정은 서버에서 
- res.header("Access-Control-Allow-Origin","*");

### TypeError: Cannot read property 'map' of undefined. 해결
이유: React 는 렌더링이 화면에 커밋 된 후에야 모든 효과를 실행하기 때문이다. 즉 React는 return에서 articles.map(...)을 반복실행할 때 첫 턴에 데이터가 아직 안들어와도 렌더링이 실행되며 당연히 그 데이터는 undefined로 정의되어 오류가 나는 것이다.
출처: https://devbirdfeet.tistory.com/47 [새발개발자] 

```
{text&&text.map(tt => (
                <li key = {tt.id}>
                    {tt.title} ({tt.author})
                </li> 
))}
```
