import React,{Component} from 'react';
import Note from './Note';

export default class Notes extends Component {

    constructor(props) {
      super(props)
      this.renderNote = this.renderNote.bind(this);
    }
    render () {
      const notes = this.props.items;
      return (
        <div>
          <ul>
            {notes.map(this.renderNote)}
          </ul>
        </div>
      );
    }
    renderNote (note) {
      return (
        <li key={`note${note.id}`}>
          <Note task={note.task} onEdit={this.props.onEdit.bind(null, note.id)}/>
        </li>
      );
    }
}
