
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  console.log(value)
  return (
    <div className='add'>
     <div className="content">
      <input type="text" placeholder='title'/>
      <div className="editorContainer">
      <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
      </div>
     </div>
     <div className="menu">
      <div className="item">
        <h1>Publish</h1>
        <span>
          <b>Status: </b> draft
        </span>
        <span>
          <b>Visibility: </b> public
        </span>
        <input style={{display:"none"}} type="file" name="" id="file" />
        <label className="file" htmlFor="file">Upload image</label>
        <div className="buttons">
          <button>save as draft</button>
          <button>update</button>
        </div>
      </div>
      <div className="item">
        <h1>Category</h1>
        <div className="cat">
        <input type="radio" name="cat" value='art' id="art" />
        <label htmlFor="art">Art</label>
        </div>
        <div className="cat">
        <input type="radio" name="cat" value='literature' id="literature" />
        <label htmlFor="literature">Literature</label>
        </div>
        <div className="cat">
        <input type="radio" name="cat" value='movies' id="movies" />
        <label htmlFor="movies">Movies</label>
        </div>
        <div className="cat">
        <input type="radio" name="cat" value='music' id="music" />
        <label htmlFor="music">Music</label>
        </div>
        
      </div>
     </div>
    </div>
  )
}

export default Write