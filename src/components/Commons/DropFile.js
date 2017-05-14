import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone'
import { Tooltip } from 'reactstrap';
const DropFile = (props) => (
    <div>
        {props.image
            ? <div className="row">
                    <div className=" form-group col-md-12">
                        <label className="form-control-label">{props.label}</label>
                        <div className="form-control">
                          <button id="tooltipImg" type="button" onClick={props.deleteImg} className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                          <Tooltip placement="right" isOpen={props.tooltipImg} target="tooltipImg" toggle={props.toggle}>
                            Delete Image
                          </Tooltip>
                            {props.image.map((file,index) =>
                              <img key={index} className="img-fluid" src={file.preview} role="presentation"/>
                            )}
                        </div>
                    </div>
                </div>
            : <div className="row">
                <div className="col-md-12">
                    <Dropzone onDrop={props.onDrop} className="drop-zone"
                      multiple={false}
                      maxSize={2097152}
                       accept="image/*">
                        <div>
                            <h5 className="text-muted">Drag Image Here</h5>
                        </div>
                    </Dropzone>
                    <label className="text-muted">Only images e.g .jpge,.png, only. Image size must be less than 2 mb</label>
                </div>
            </div>}
    </div>
)
DropFile.propTypes = {
    image: PropTypes.array,
    onDrop: PropTypes.func.isRequired,
    deleteImg: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    tooltipImg: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired
};
export default DropFile;
