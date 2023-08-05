import './sidebar.scss';

import { Avatar } from '@components/Avatar';

import { PencilLine } from '@phosphor-icons/react';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="background-sidebar" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50." />
      
      <div className="author-info">
        <Avatar src="https://github.com/euosouza.png" />
        <p className='name'><strong>Victor Souza</strong></p>
        <p className='role'>Developer Front-end</p>
      </div>

      <div className="wrapper-btn">
        <a className='btn-edit' href="#">
          <PencilLine size={20} />
          <span>Editar seu perfil</span>          
        </a>
      </div>
    </aside>
  );
}