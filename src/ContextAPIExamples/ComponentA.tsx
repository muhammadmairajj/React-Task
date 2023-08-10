import { useContext } from 'react';
import ComponentD from './ComponentD';
import { PostData } from '../context';

interface PostDataProps {
    id: number;
    title: string;
    body: string;
}

function ComponentA() {
    const getPostData = useContext(PostData);

    console.log('getPostData --> ', getPostData);

    return (
        <div>
            <h1>Component A</h1>
            {getPostData?.map((item: PostDataProps) => {
                return (
                    <ComponentD
                        postId={item.id}
                        title={item.title}
                        body={item.body}
                    />
                );
            })}
        </div>
    );
}

export default ComponentA;
