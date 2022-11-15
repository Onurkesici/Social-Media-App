import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "İbrahim Kesici",
      userId: 1,
      profilePicture:
        "https://imgs.search.brave.com/U8h7IVkINq6R_y7aP05FJEDDXX3uXEgveKDvpg_1_DM/rs:fit:128:128:1/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/aWkvcHJvZmlsZS5p/bWFnZS8yODY2MzE5/MTIzMjkyMTYtMTQ0/NTM0OTc4MTEwOV9R/MTI4L0licmFoaW0t/S2VzaWNpLTIuanBn",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Büşra Kesici",
      userId: 2,
      profilePicture:
        "https://imgs.search.brave.com/1_hL-ApqVzwyxAqZYoUO93zkLNZLHiO-zgz1hC-j_Mg/rs:fit:280:280:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vMjgw/eDI4MF9SUy9mMy85/Yy81My9mMzljNTMy/NDUwMWE3YmVlNTQ5/NGI2N2E0Zjk1NjU5/Ni5qcGc",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;