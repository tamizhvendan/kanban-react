import React from 'react';
import uuid from 'node-uuid';
import Notes from './Notes.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.state = {
      notes : [
        {
          id : uuid.v4(),
          task : 'learn webpack'
        },
        {
          id : uuid.v4(),
          task : 'configure babel in webpack'
        },
        {
            id : uuid.v4(),
            task : 'get started with react.js'
        }
      ]
    }
  }

  addNote () {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }

  editNote(noteId, task) {
    console.log('note edited', noteId, task);
  }

  render () {
    const notes = this.state.notes;
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={notes} onEdit={this.editNote}/>
      </div>
    );
  }
}
