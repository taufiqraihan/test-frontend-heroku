import React, { Component } from 'react';
import Axios from '../../axios'

class SiswaEdit extends Component {

  constructor(){
    super()

    this.state = {
      nama:'',
      alamat:'',
      kelas:'',
      errorNama:'',
      errorAlamat:'',
      errorKelas:''
    }
  }

  componentDidMount () {
    this.getData()
  }

  getData = () => {
    const token = localStorage.getItem('token')
    const headers = {
      token :token
    }
    const siswaId = this.props.match.params.id
    Axios.get(`/siswas/${siswaId}`, { headers })
      .then(res => {
        const { nama, alamat, kelas } = res.data.data
        this.setState({
          nama,
          alamat,
          kelas
        })
    }).catch(err => console.log(err))
  }

  handleValidation = () => {
    const nama = this.state.nama
    const alamat = this.state.alamat
    const kelas = this.state.kelas
    let errorNama = this.state.errorNama
    let errorAlamat = this.state.errorAlamat
    let errorKelas = this.state.errorKelas
    let formIsValid = true
    // nama
    if (!nama) {
        formIsValid = false
        errorNama = 'Cannot be empty'
    } else if (typeof nama !== "undefined") {
        if (!nama.match(/^[a-zA-Z\s]+$/)) {
            formIsValid = false
            errorNama = 'Only letters'
        }
    }
    // alamat
    if (!alamat) {
        formIsValid = false
        errorAlamat = 'Cannot be empty'
    }
    // kelas
    if (!kelas) {
        formIsValid = false
        errorKelas = 'Cannot be empty'
    } else if (typeof kelas !== "undefined") {
        if (!kelas.match(/^[0-9]+$/)) {
            formIsValid = false
            errorKelas = 'Only Numbers'
        }
    }
    this.setState({errorNama: errorNama, errorAlamat: errorAlamat, errorKelas: errorKelas})
    return formIsValid
  }

  handleSubmit = (e) => {
    const token = localStorage.getItem('token')
    const headers = {
      token :token
    }
    const siswaId = this.props.match.params.id
    const { nama, alamat, kelas } = this.state
      Axios.put(`/siswas/${siswaId}`, { nama, alamat, kelas }, { headers })
        .then(res => {
          console.log(res);
          this.props.history.push('/siswa')
        })
        .catch(err => console.log(err))
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  render () {
    return(
      <div>
        <h1>Edit Siswa</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Nama</label>
          <div className='form-group'>
            <input
              name='nama'
              value={ this.state.nama }
              onChange={ this.handleChange }
              className='form-control'
            />
          </div>
          <label>Alamat</label>
          <div className='form-group'>
            <input
              name='alamat'
              value={ this.state.alamat }
              onChange={ this.handleChange }
              className='form-control'
            />
          </div>
          <label>Kelas</label>
          <div className='form-group'>
            <input
              name='kelas'
              value={ this.state.kelas }
              onChange={ this.handleChange }
              className='form-control'
            />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  }
}

export default SiswaEdit
