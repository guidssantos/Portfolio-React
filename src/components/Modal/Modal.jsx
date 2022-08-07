import React, { Component } from 'react'
import './modal.css'

export default class Modal extends Component {
  render() {

    let modalStyle ={
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
        color: 'black'
    }

    return ( 
        <div className="modal show fade"  role='dialog' style={modalStyle}>
        <div className="modal-lg modal-dialog " role="document">
          <div className="modal-content text-center ">
            <div className="modal-header ">           
              <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={this.props.hide}>
                <span aria-hidden='true'>x</span>
                </button>
            </div>
            <div className="modal-body row">
                
                <p className='col '>{this.props.video}</p>   
                <div className='col'>
                <h4 className="modal-title ">{this.props.title}</h4>
              <p className='pt-3 text-justify col'>{this.props.desc}</p>
              </div>
            </div>
            <div className="modal-footer">
              <a type="button" className="btn btn-secondary" data-dismiss="modal" href={this.props.repo} target='_blank'>Acessar Repositório</a>
              <a type="button" className="btn btn-secondary" data-dismiss="modal" href={this.props.proje} target='_blank'>Acessar Projeto</a>
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.hide}>Fechar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
