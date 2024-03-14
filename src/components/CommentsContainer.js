import React from 'react'
import { FaUser } from "react-icons/fa";

export default function CommentsContainer() {
  const commentsData = [
    {
      name: " Bharadwaj",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: " Bharadwaj",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: " Bharadwaj",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: " Bharadwaj",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: " Bharadwaj",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: " Bharadwaj",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: " Bharadwaj",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: " Bharadwaj",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: " Bharadwaj",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " Bharadwaj",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: " Bharadwaj",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: " Bharadwaj",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: " Bharadwaj",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];

  const Comments = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className='flex w-3/4 bg-[#e5e7eb] p-2 rounded-md my-2'>
        <FaUser className='text-3xl mt-2' />
        <div className='flex flex-col ml-5'>
          <p className='font-bold text-2xl'>{name}</p>
          <p>{text}</p>
        </div>
      </div>
    )
  }

  const CommentsList = ({comments}) => {
    return (
      <div>
        {comments.map((comment,index) => {
          return (
            <div key={index}>
              <Comments data={comment}/>
              <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments={comment.replies}/>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className='m-10'>
      <h1 className='font-bold text-3xl'>Comments:</h1>
      <CommentsList comments={commentsData}/>
    </div>
  )
}
