import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Radio from "./Radio";
import { Categories } from "../../helpers";

function ToUploadItem(props) {
    const {
        files,
        index,
        handleDelete,
        file,
        disable,
        setFileName,
    } = props.state;
    const [nameValue, setNameValue] = useState(file.name);
    const [changeName, setChangeName] = useState(false);
    const [category, setCategory] = useState(Categories[0].category);
    useEffect(() => {
        files[index].category = category;
    }, [category, files, index]);
    const handleChangeName = (e) => {
        e.preventDefault();
        setNameValue(nameValue);
        setFileName(index, nameValue);
    };

    return (
        <div className="toupload-item" data-key={index}>
            <Radio chooseCategory={{ category, setCategory }} />
            <div className='to-upload-name-container'>

                {changeName ? (
                    <form onSubmit={handleChangeName}>
                        <input
                            autoFocus={true}
                            className="upload-item-change-name"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </form>
                ) : (
                    <span className="upload-item-name">{nameValue}</span>
                )}
              
            </div>
            <div className='actions'>
                  <div className='edit-button'>
                    <IconButton
                        onClick={() => {
                            setChangeName((val) => !val);
                        }}
                    >
                        <EditIcon />
                    </IconButton>
                </div>
                <IconButton
                    key={index}
                    disabled={disable}
                    onClick={(e) => handleDelete(e, index)}
                    aria-label="delete"
                    className="margins"
                >
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default ToUploadItem;
