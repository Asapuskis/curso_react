import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar />
        <div className='notes__content'>
            <input
              type='text'
              placeholder='Title'
              className='notes__title-input'
              autoComplete='off'
            />

            <textarea
              placeholder='Take a note...'
              className='notes__textarea'
              rows='3'
            />

            <div className='notes__image'>
                <img
                    src='https://www.burdeos-turismo.es/sites/bordeaux_tourisme/files/styles/large/public/medias/widgets/misc/Les%20landes%20-%20David%20Remazeilles.jpg?itok=_9vKraeA'
                    alt='lol'
                />
            </div>
        </div>
    </div>
  )
}
