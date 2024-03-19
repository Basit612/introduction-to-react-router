import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();

  const userStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "15px",
  };

  const handleShowDetail = () => {
   navigate (`/post/${id}`);
  };

  return (
    <div style={userStyle}>
      <h3>Post of Id: {id}</h3>
      <p>{title}</p>
      <p>{body}</p>
      <Link to={`/post/${id}`}>Post Detail</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleShowDetail}>Click Show Details</button>
    </div>
  );
};

export default Post;
