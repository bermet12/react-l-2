import React from "react";

const PostList = ({ title }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '20px' }}>
                {title}
            </h1>
        </div>
    );
}

export default PostList