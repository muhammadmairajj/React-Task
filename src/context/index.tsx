import React, { createContext, useEffect, useState, ReactNode } from 'react';

export const PostData = createContext<any>(null); // Set the default value for createContext

interface PostDataProviderProps {
  children: ReactNode; // Define the type of children prop as ReactNode
}

const PostDataProvider = ({ children }: PostDataProviderProps) => {
  const [postData, setPostData] = useState<any>([]);

  useEffect(() => {
    const postDataFetch = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res?.json();
      console.log('data --> ', data);
      setPostData(data);
    };

    postDataFetch();
  }, []); // Call the postDataFetch function inside useEffect

  return (
    <PostData.Provider value={postData}>
      {children}
    </PostData.Provider>
  );
};

export default PostDataProvider;
