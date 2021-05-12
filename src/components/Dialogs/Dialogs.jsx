import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={s.dialogs}>{props.message}</div>

}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogItem name='Sasha' id='1'/>
                <DialogItem name='Sveta' id='2'/>
                <DialogItem name='Andiy' id='3'/>
                <DialogItem name='Alex' id='4'/>
                <DialogItem name='Ivan' id='5'/>
                <DialogItem name='Ga' id='6'/>
                <DialogItem name='Sos' id='7'/>

            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Yoo'/>
                <Message message='Ok'/>
                <Message message='Hi'/>
                <Message message='da'/>

            </div>
        </div>
    );
}
export default Dialogs;