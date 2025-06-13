import './style.css';
import Post from './post/index.jsx';
import Newpost from './newpost/index.jsx';
export default function Posts() {
    return (
        <div className="posts-container">
            <Newpost />
            <Post />
            
        </div>
    );
};
