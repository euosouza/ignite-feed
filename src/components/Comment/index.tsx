import './comment.scss';

import { useState } from "react";

import { Avatar } from '../Avatar';
import { Trash, ThumbsUp } from '@phosphor-icons/react';

interface IComment {
  id: number;
  content: string;
}

interface CommentProps {
  comment: IComment;
  onDeleteComment: (comment: IComment) => void;
}

export function Comment({ comment, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(comment)
  }

  function handleLikeComment() {
    setLikeCount(state => state + 1)
  }

  return (
    <div className="card-comment">
      <Avatar src="https://github.com/euosouza.png" hasBorder={ false } />
      <div className="wrapper-comment">
        <div className='content-comment'>
          <header className='header-comment'>
            <div className="author-info">
              <p className='name'>
                Devon Lane <span>(você)</span>
              </p>
              <p className='date-publication'>
                <time>Cerca de 2h</time>
              </p>
            </div>

            <button className='btn-delete' title="Deletar comentário" onClick={ handleDeleteComment }>
              <Trash size={20} />
            </button>            
          </header>

          <div className="comment">
            <p>{ comment.content }</p>
          </div> 
        </div>

        <div className="wrapper-likes">
          <button title="Curtir comentário" onClick={ handleLikeComment }>
            <ThumbsUp size={20} />
            <span>Aplaudir</span><span>•</span><span>{ likeCount }</span>          
          </button> 
        </div>        
      </div>
    </div>
  )
}