import React from 'react';
import logo from './logo.svg';
import './App.css';
import { JSX_TYPES } from '@babel/types';

function App() {

    var arr = Array.from({ length: 3 }, (_, i) => i + 1);

    return (
        <>
            <div className="UInterface">

                <div className="App-header">
                    <CameraFormBtn name={'create'}/>
                    
                </div>

                <div className="table">
                    <div className="table__header">

                        <p>№</p>
                        <p>Название</p>
                        <p>Список ссылок</p>
                        <p>Взаимодействие</p>

                    </div>

                    <ul className="table__list">
                        {arr.map((cnt) => <ListItem cnt={cnt} name={'Камера ' + cnt} href={'https://yandex.ru'} />)}
                    </ul>
                </div>

            </div>

            <div className="dark hidden"></div>
            <CameraForm name={'create'} />
            <CameraForm name={'edit'} />
            <CameraForm name={'delete'} />
        </>
    );
}


function ListItem(props: any) {
    return (
        <li className="list-item">

            <div className="list-item__cnt">{props.cnt}</div>

            <div className="list-item__name">{props.name}</div>

            <div className="list-item__links">
                <a className="list-item__link" target="_blank" href={props.href}>{props.href}</a>
            </div>

            <div className="list-item__btns">
                <CameraFormBtn name={'edit'} />

                <CameraFormBtn name={'delete'} />
            </div>

        </li>
    );
}


class CameraFormBtn extends React.Component<{ name: string }>{

    constructor(props: any) {
        super(props);

        this.ShowWindow = this.ShowWindow.bind(this);
    }

    ShowWindow()
    {
        document.getElementsByClassName('dark')[0]?.classList.remove('hidden');
        document.getElementsByClassName(this.props.name+'Camera')[0]?.classList.remove('hidden');
    }

    render() {
        var btnName = '';

        switch (this.props.name) {

            case 'edit':
                btnName = 'Изменить';
                break;

            case 'delete':
                btnName = 'Удалить';
                break;

            case 'create':
                btnName = 'Создать';
                break;
        }

        return (
            <div className={"button " + this.props.name} onClick={this.ShowWindow}>{btnName}</div>
        );
    }
}

class CameraForm extends React.Component<{ name: string }>{
    constructor(props: any) {
        super(props);
    }

    render() {
        
        var FormType;

        switch (this.props.name) {

            case 'edit':
                FormType = EditForm();
                break;

            case 'delete':
                FormType = DeleteComfirmForm();
                break;

            case 'create':
                FormType = CreateForm();
                break;
        }

        return (FormType);
    }
}

function CreateForm() {
    return (
        <form className="createCamera hidden">

            <div className="createWindow-header">
                <div className="windowTitle">Создание камеры</div>

                <div className="closeBtn"></div>
            </div>

            <div className="createWindow__cameraName">
                <div className="cameraName inputTitle">Название камеры</div>
                <input type="text" className="cameraName__input" />
            </div>

            <div className="createWindow__cameraHref">

            </div>

            <div className="createWindow__cameraBtns"></div>

        </form>
    );  
}

function EditForm() {
    return (
        <></>  
    );
}

function DeleteComfirmForm() {
    return (
        <></>
    );
}

export default App;
