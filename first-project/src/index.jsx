import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from './header'
import CardList from './CardList'
import {getData} from './data.js'



//React Component
class Biodata extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSiswa: getData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
    }

    onDeleteHandler(id) {
        const dataSiswa = this.state.dataSiswa.filter(siswa => siswa.id !== id)
        this.setState({dataSiswa})
    }

    render() {
        return (
            <div>
                <Header />
                <CardList
                    dataSiswa={this.state.dataSiswa}
                    onDelete={this.onDeleteHandler}
                />
            </div>
        )
    }
}

const element = (
    <div>
        <Biodata/>
    </div>
)

const root = createRoot(document.getElementById('root'))
root.render(element)