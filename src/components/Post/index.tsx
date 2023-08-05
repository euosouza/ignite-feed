import './post.scss';

import { useState, FormEvent, ChangeEvent } from "react"
import { Avatar } from '@components/Avatar';
import { Comment } from '@components/Comment';

import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {
  type: string;
  content: string;
}

interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface IComment {
  id: number;
  content: string;
}

export function Post({author, content, publishedAt}: PostProps) {
  // TODO: adicionar o autor, e data publicada dinamicamente nos comentárioseeeeeeeee
  const [comments, setComments] = useState<IComment[]>([
    { id: 1, content: "Muito bom Devon, parabéns!! 👏👏"}
  ]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { 
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
  });

  const publishedDateISO = publishedAt.toISOString();

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    const newComment: IComment = { id: comments.length + 1, content: newCommentText };

    setComments([...comments, newComment]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity(""); // Resetando msg devalidação nativa
    setNewCommentText(event.target.value);
  }
  
  function deleteComment(commentToDelete: IComment) {
    const commentsWithouDeleteOne = comments.filter(comment => comment.id != commentToDelete.id);
    setComments(commentsWithouDeleteOne);
  }

  function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório") // Alterando msg devalidação nativa
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className='post'>
      <header className='header-post'>
        <div className="author">
          <Avatar src={ author.avatarUrl } />
          <div className="author-info">
            <p className="name">{ author.name }</p>
            <p className="role">{ author.role }</p>
          </div>
        </div>

        <time
          title={ publishedDateFormatted }
          dateTime={ publishedDateISO }
          className="date-publication"
        >
            Públicado há { publishedDateRelativeToNow }
        </time>
      </header>

      <div className="content">
        {content.map(line => {
          if(line.type === "paragraph") {
            return <p key={ line.content }>{ line.content }</p>
          } else if(line.type === "link") {
            return <p key={ line.content }><a href="#">{ line.content }</a></p>
          }
        })}
      </div>

      <div className="wrapper-feedback">
        <p className='title'>Deixe seu feedback</p>

        <form className='form-comment' onSubmit={ handleCreateNewComment }>
          <textarea
            value={ newCommentText }
            placeholder='Escreva um comentário'
            name="comment"
            onChange={ handleNewCommentChange }
            onInvalid={ handleNewCommentInvalid }
            required
          />
          <div className="wrapper-button">
            <button
              type='submit'
              disabled={ isNewCommentEmpty }
            >
              Publicar
            </button>              
          </div>
        </form>
      </div>

      <div className="list-comments">
        {comments.map(comment => {
            return (
              <Comment
                key={ comment.id }
                comment={ comment }
                onDeleteComment={ deleteComment }
              />
            )
          })}
      </div>
    </article>
  );
}