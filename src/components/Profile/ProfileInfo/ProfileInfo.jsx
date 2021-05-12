import React from 'react'
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img
                src='https://m.iguides.ru/upload/iblock/637/6375946d9669a27030241e80ffa82b93.jpg'/>
            <div className={s.descriptoinBlock}>
                ava+descriptoin</div>
        </div>
    );
}

export default ProfileInfo;
