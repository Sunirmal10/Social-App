import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
// import { useQuery } from "@tanstack/react-query";
// import { makeRequest } from "../../axios";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  // temp //

  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpcg0IxOljPNg9u5QrP184ECfupYJrDXiJGO_Cpa7To9LU5ZAgxDnIZihlemdTMd4g0&usqp=CAU"
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpcg0IxOljPNg9u5QrP184ECfupYJrDXiJGO_Cpa7To9LU5ZAgxDnIZihlemdTMd4g0&usqp=CAU"
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpcg0IxOljPNg9u5QrP184ECfupYJrDXiJGO_Cpa7To9LU5ZAgxDnIZihlemdTMd4g0&usqp=CAU"
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpcg0IxOljPNg9u5QrP184ECfupYJrDXiJGO_Cpa7To9LU5ZAgxDnIZihlemdTMd4g0&usqp=CAU"
    },
    {
      id: 5,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpcg0IxOljPNg9u5QrP184ECfupYJrDXiJGO_Cpa7To9LU5ZAgxDnIZihlemdTMd4g0&usqp=CAU"
    },
    {
      id: 6,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpcg0IxOljPNg9u5QrP184ECfupYJrDXiJGO_Cpa7To9LU5ZAgxDnIZihlemdTMd4g0&usqp=CAU"
    },
    {
      id: 7,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpcg0IxOljPNg9u5QrP184ECfupYJrDXiJGO_Cpa7To9LU5ZAgxDnIZihlemdTMd4g0&usqp=CAU"
    },
    {
      id: 8,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpcg0IxOljPNg9u5QrP184ECfupYJrDXiJGO_Cpa7To9LU5ZAgxDnIZihlemdTMd4g0&usqp=CAU"
    },
    {
      id: 9,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpcg0IxOljPNg9u5QrP184ECfupYJrDXiJGO_Cpa7To9LU5ZAgxDnIZihlemdTMd4g0&usqp=CAU"
    },
    {
      id: 10,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpcg0IxOljPNg9u5QrP184ECfupYJrDXiJGO_Cpa7To9LU5ZAgxDnIZihlemdTMd4g0&usqp=CAU"
    },
    {
      id: 11,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpcg0IxOljPNg9u5QrP184ECfupYJrDXiJGO_Cpa7To9LU5ZAgxDnIZihlemdTMd4g0&usqp=CAU"
    },
    {
      id: 12,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpcg0IxOljPNg9u5QrP184ECfupYJrDXiJGO_Cpa7To9LU5ZAgxDnIZihlemdTMd4g0&usqp=CAU"
    },
    {
      id: 13,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpcg0IxOljPNg9u5QrP184ECfupYJrDXiJGO_Cpa7To9LU5ZAgxDnIZihlemdTMd4g0&usqp=CAU"
    },
    {
      id: 14,
      name: "John Doe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpcg0IxOljPNg9u5QrP184ECfupYJrDXiJGO_Cpa7To9LU5ZAgxDnIZihlemdTMd4g0&usqp=CAU"
    },
  ]

  // const { isLoading, error, data } = useQuery(["stories"], () =>
  //   makeRequest.get("/stories").then((res) => {
  //     return res.data;
  //   })
  // );

  //TODO Add story using react-query mutations and use upload function.

  return (
    <div className="stories">
      <div className="story proStory">
        <img src={
          "/upload/" + 
          currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {
        stories.map(story=>(
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
              <span>{story.name}</span>
          </div>
        ))
      }
      {/* {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((story) => (
            <div className="story" key={story.id}>
              <img src={story.img} alt="" />
              <span>{story.name}</span>
            </div>
          ))} */}
    </div>
  );
};

export default Stories;
