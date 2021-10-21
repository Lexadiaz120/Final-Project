import React from 'react'  
import NotebookList from './NotebookList'   
import './NotebookPage.css' 
import './NotebookPage.css'




export default function NoteBookPage(){
    return(
       <>   
        <div className="backgroundnotebook">
            <h1 className="notebook_title">Notebook  Models</h1>
            <NotebookList />  
            </div>
    </> 
    )
}