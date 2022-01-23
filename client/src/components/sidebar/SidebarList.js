import React        from 'react';
import SidebarEntry from './SidebarEntry';

const SidebarList = (props) => {
    
    let tempList = [...props.todolists];
    tempList.forEach((list, i) => {
        if(list.id == props.activeid){
            tempList.splice(i,1);
            tempList.unshift(list)
        }
    });
    
    return (
        <>
            {
                
                tempList &&
                tempList.map(todo => (
                    <SidebarEntry
                        handleSetActive={props.handleSetActive} activeid={props.activeid}
                        id={todo.id} key={todo.id} name={todo.name} _id={todo._id}
                        updateListField={props.updateListField}
                    />
                ))
            }
        </>
    );
};

export default SidebarList;