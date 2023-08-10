import React, { useState, useEffect } from "react";
import "./style.css";

const CompareTwoAPIData = () => {
  const [users, setUsers] = useState<any>([]);
  const [posts, setPosts] = useState<any>([]);
  const [userTitleData, setUserTitleData] = useState<any>([]);
  const [comments, setComments] = useState<any>([]);
  const [showScreen, setShowScreen] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // User API Data
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const user_data = await res.json();
    // console.log('User Data --> ', user_data);
    setUsers(user_data);

    // Post API Data
    const res_2 = await fetch("https://jsonplaceholder.typicode.com/posts");
    const post_data = await res_2.json();
    // console.log('Post Data --> ', post_data);
    setPosts(post_data);
  };

  // console.log('Data ---> ', users, posts);

  useEffect(() => {
    let arr: any = [];
    if (users.length && posts.length > 0) {
      posts &&
        posts?.map((post: any, index: number) => {
          let obj: any = {};
          users?.filter((user: any, indx: number) => {
            if (user?.id === post.userId) {
              // console.log('user --> ', posts);
              obj["username"] = user.username;
              obj["title"] = post.title;
              obj["postId"] = post.id;
            }
          });

          arr.push(obj);
        });
      setUserTitleData(arr);
    }
  }, [users, posts]);

  //   console.log("User Title Data ---> ", userTitleData);

  const callCommentEvent = async (event: any, item: any) => {
    // console.log('Item --> ', item);
    setComments([]);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${item.postId}`
    );
    const data = await res.json();
    // console.log('comments data -->', data);
    setComments(data);
    setShowScreen(false);
  };

//   console.log("comments --> ", comments);
  return (
    <div>
      <h1>
        Compare Two API Response Data || Compare Two Array of Objects In ReactJS{" "}
      </h1>

      <div style={{ margin: 20 }}>
        {showScreen ? (
          <div className="flex">
            {userTitleData
              ? userTitleData?.map((val: any, index: number) => {
                  return (
                    <div
                      className="ui-cards"
                      key={index}
                      style={{ width: "150px" }}
                      onClick={(e) => callCommentEvent(e, val)}
                    >
                      <div style={{ fontWeight: "bolder", paddingBottom: 20 }}>
                        {val?.username}
                      </div>
                      <div>{val?.title}</div>
                    </div>
                  );
                })
              : "No Data"}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setShowScreen(true)}
              className="btn btn-info"
              style={{ color: "white" }}
            >
              Back
            </button>
            <div className="flex">
              {comments &&
                comments?.map((comment: any, index:number) => {
                  return (
                    <div className="ui-cards" style={{ width: "200px" }} key={index}>
                      <div style={{ fontWeight: "bolder", paddingBottom: 20 }}>
                        {comment?.name}
                      </div>
                      <div>{comment?.body}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareTwoAPIData;
