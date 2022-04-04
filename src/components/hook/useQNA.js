import { useEffect, useState } from 'react';

const useQNA = () => {
    const [qna, setQna] = useState([]);

    useEffect(()=>{
        fetch('questionAns.json')
        .then(res=>res.json())
        .then(data=>setQna(data))
    },[]);
    return [qna];
};

export default useQNA;