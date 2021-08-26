import React from 'react'

export default function ConfirmDelete(props) {
    const { setDeleteVeh, handleDel} = props
    return (
            <div className="modal-dialog modal-confirm">
                <div className="modal-content">
                    <div className="modal-header flex-column">
                        <div className="icon-box">
                            <i className="fa fa-exclamation material-icons"></i>
                        </div>						
                        <h4 className="modal-title w-100">Are you sure?</h4>	
                    </div>
                    <div className="modal-body">
                        <p>Do you really want to delete these Vehicle? This process cannot be undone.</p>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button onClick={()=> setDeleteVeh(false)}ctype="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button onClick={handleDel}type="button" className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
    )
}
