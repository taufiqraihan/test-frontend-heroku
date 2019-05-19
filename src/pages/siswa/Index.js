import React, { Component } from 'react'
import axios from '../../axios'
import { Link } from 'react-router-dom'

class SiswaIndex extends Component {
  constructor(){
    super()
    this.state ={
      siswa: []
    }
  }
  componentDidMount() {
    this.getInitialData()
  }

  getInitialData = () => {
    const token = localStorage.getItem('token')
    const headers = {
      token :token
    }
    console.log(headers);
    axios.get('/siswas', { headers }).then(res => {
      this.setState({siswa: res.data.data})
    }).catch(err => console.log(err))
  }

  handleDelete = (id) => {
    const token = localStorage.getItem('token')
    const headers = {
      token :token
    }
    axios.delete(`/siswas/${id}`, { headers })
      .then(res => {
        this.getInitialData()
      }).catch(err => console.log(err))
  }

  handlEdit = (id) => {
    this.props.history.push(`/siswa/edit/${id}`)
  }


  render() {
    return(
      <div>
        <h1>Data Siswa</h1>
        <Link to='/siswa/create' className='btn btn-primary'>Tambah Siswa</Link>
        <table className="table">
          <thead>
            <th>nama</th>
            <th>alamat</th>
            <th>kelas</th>
            <th>aksi</th>
          </thead>
          <tbody>
            {
              this.state.siswa.map((data, index) => {
                return (
                  <tr>
                    <td>{data.nama}</td>
                    <td>{data.alamat}</td>
                    <td>{data.kelas}</td>
                    <td>
                      <button onClick={ () => {this.handlEdit(data.id)}} className="btn btn-warning">Edit</button>
                      <button onClick={ () =>{if (window.confirm('Anda Yakin Menghapus data ? ')) {this.handleDelete(data.id)}}} className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default SiswaIndex
