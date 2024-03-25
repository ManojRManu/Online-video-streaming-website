import React from 'react'

const commentsData = [
    {
        name: "Manoj",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [{
            name: "Manoj",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: []    
        },{
            name: "Manoj",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [{
                name: "Manoj",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [{
                    name: "Manoj",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [{
                        name: "Manoj",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: []    
                    },{
                        name: "Manoj",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: []    
                    },]    
                },{
                    name: "Manoj",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: []    
                },]    
            },{
                name: "Manoj",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [ ]    
            },{
                name: "Manoj",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: []    
            }, ]    
        },{
            name: "Manoj",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [{
                name: "Manoj",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [ ]    
            },{
                name: "Manoj",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: []    
            },{
                name: "Manoj",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: []    
            },]    
        },{
            name: "Manoj",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [ ]    
        },{
            name: "Manoj",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: []    
        }, ]    
    },   {
        name: "Manoj",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: []    
    },   {
        name: "Manoj",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: []    
    },   {
        name: "Manoj",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: []    
    },   {
        name: "Manoj",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: []    
    },   {
        name: "Manoj",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: []    
    }, 
]

const Comment = ({data})=> {
    const {name, text, replies} = data;
return (
<div className='flex shadow-lg bg-gray-50 p-2 rounded-lg my-2'>
  <img className='w-8 h-8' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
  <div className='px-3'>
    <p className='font-bold'>{name}</p>
    <p className=''>{text}</p>
  </div>
</div>
);
};

const CommentsList = ({comments})=> {
return comments.map((comment, index)  => (
<div key={index}>
<Comment   data={comment} />
<div className='pl-5 border border-l-black ml-5'>
 <CommentsList comments = {comment.replies} />
</div>
</div>
)
)};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='font-bold text-2xl'>Comments</h1>
      <CommentsList comments = {commentsData}/>
    </div>
  );
};

export default CommentsContainer
