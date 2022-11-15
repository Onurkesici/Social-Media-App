import Post from "../post/Post";
import './posts.scss'

const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "Büşra Kesici",
      userId: 1,
      profilePic:
        "https://imgs.search.brave.com/1_hL-ApqVzwyxAqZYoUO93zkLNZLHiO-zgz1hC-j_Mg/rs:fit:280:280:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vMjgw/eDI4MF9SUy9mMy85/Yy81My9mMzljNTMy/NDUwMWE3YmVlNTQ5/NGI2N2E0Zjk1NjU5/Ni5qcGc",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4030908/pexels-photo-4030908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Büşra Kesici",
      userId: 2,
      profilePic:
        "https://imgs.search.brave.com/1_hL-ApqVzwyxAqZYoUO93zkLNZLHiO-zgz1hC-j_Mg/rs:fit:280:280:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vMjgw/eDI4MF9SUy9mMy85/Yy81My9mMzljNTMy/NDUwMWE3YmVlNTQ5/NGI2N2E0Zjk1NjU5/Ni5qcGc",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts