import { NextPage } from 'next';
import { useState } from 'react';

const Hello: NextPage = () => {
    const [data, setData] = useState();

    async function getData() {
        const response = await fetch ('http://localhost:80/api/hello', {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
        });
        const json = await response.json();
        return json;
    }

    getData().then(data => {
        setData(JSON.stringify(data.message));
    });

    if (!data) return <div>読み込み中</div>
    return (
    <div>
        <h1>ようこそ</h1>
        <p>{data}</p>
    </div>
    )
}
 
export default Hello