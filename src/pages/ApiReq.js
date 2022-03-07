import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiReq = () => {
    const [text, setText] = useState();

    const fetchUsers = async () => {  // 비동기 함수 앞에 async를 넣으면 프로미스 객체를 리턴한다. (프로미스는 비동기 처리를 위한 객체)
        try {
            const response = await axios.get(    // 프로미스가 끝날때까지 기다린다. (await를 사용하지 않으면 콜백함수나 .then()등을 사용)
                'http://localhost:8080/api/books/'
            );
            setText(response.data);
            console.log(response.data);
        } catch(e){
            console.log('API 호출 실패 :' + e);
        }
    };

    //useEffect에 바로 async사용 할 수 없기때문에 내부에서 새로운 함수 선언
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            {text&&text.map(tt => (
                <li key = {tt.id}>
                    {tt.title} ({tt.author})
                </li> 
            ))}
        </div>
    );
};

export default ApiReq;