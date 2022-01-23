import React from 'react';

import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const clickDisabled = () => { };

    return (
        <WRow className="table-header">
            <WCol size="3">
                <WButton className='table-header-section' wType="texted" onClick={props.disabled ? clickDisabled : () => props.sort("description")} >Task</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick={props.disabled ? clickDisabled : () => props.sort("assigned_to")}>Assigned To</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick={props.disabled ? clickDisabled : () => props.sort("due_date")}>Due Date</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick={props.disabled ? clickDisabled : () => props.sort("completed")} >Status</WButton>
            </WCol>

            <WCol size="3">
                <div className="table-header-buttons">
                    {
                        (props.hasUndo) ?
                        <WButton className={`${buttonStyle}`} onClick={props.disabled ? clickDisabled : props.undo} wType="texted" shape="rounded">
                            <i className="material-icons">undo</i>
                        </WButton> 
                        :
                        <WButton className={`table-header-button-disabled-undoredo`} onClick={clickDisabled} wType="texted" shape="rounded">
                            <i className="material-icons">undo</i>
                        </WButton>
                    }
                    {
                        (props.hasRedo) ?
                        <WButton className={`${buttonStyle}`} onClick={props.disabled ? clickDisabled : props.redo} wType="texted" shape="rounded">
                            <i className="material-icons">redo</i>
                        </WButton> 
                        :
                        <WButton className={`table-header-button-disabled-undoredo`} onClick={clickDisabled} wType="texted" shape="rounded">
                            <i className="material-icons">redo</i>
                        </WButton>
                    }
                    <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">add_box</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">delete_outline</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : () => props.setActiveList({})} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
            </WCol>

        </WRow>
    );
};

export default TableHeader;