import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    var arr = Array.from({ length: 3 }, (_, i) => i + 1);

    return (
        <>
            <div className="UInterface">
                <div className="App-header">
                    <div className="button" id="create" onClick={createWindow}>Create</div>
                </div>

                <div className="table">
                    <div className="table__header">
                        <p>#</p>
                        <p>Name</p>
                        <p>List of links</p>
                        <p>Interaction</p>
                    </div>

                    <ul className="table__list">
                        {arr.map((cnt) => <ListItem cnt={cnt} name={'Camera ' + cnt} href={'https://yandex.ru'} />)}
                    </ul>
                </div>
            </div>

            <CreateCameraForm />
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
                <div className="button edit">Edit</div>
                <div className="button delete">Delete</div>
            </div>
        </li>
    );
}

function createWindow() {
    document.getElementById('dark')?.classList.add("active");
}

function createCamera() {

}

class CreateCameraForm extends React.Component<{}, { value: string }>{
    constructor(props: any) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event: any) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            /*<form onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Отправить" />
            </form>*/

            <div className="dark">
                <form className="createWindow" onSubmit={this.handleSubmit}>
                    <div className="createWindow__title">Creating the camera</div>

                    <div className="createWindow__cameraName">
                        <div className="cameraName__title">Camera name</div>
                        <input type="text" className="cameraName__input" value={this.state.value} onChange={this.handleChange} />
                    </div>

                    <div className="createWindow__cameraHref">

                    </div>

                    <div className="createWindow__cameraBtns"></div>
                </form>
            </div>
        );
    }
}

export default App;
