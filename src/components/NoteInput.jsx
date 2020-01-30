import React, { Component } from "react";

class NoteInput extends Component {
  render() {
    const { item, handleSubmit, handleChange, handleEdit } = this.props;

    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <div
                  className={
                    handleEdit === true
                      ? "input-group-text bg-success"
                      : "input-group-text bg-info"
                  }
                >
                  <i className="fas fa-book text-white"></i>
                </div>
              </div>
              <input
                type="text"
                name={item}
                className="form-control"
                placeholder="add a note..."
                value={item}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              handleEdit === true
                ? "btn btn-success btn-block text-uppercase"
                : "btn btn-info btn-block text-uppercase"
            }
          >
            submit note
          </button>
        </form>
        <div className="form-group"></div>
      </div>
    );
  }
}

export default NoteInput;
