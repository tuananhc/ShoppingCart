import React, { useState } from 'react';
import Modal from 'react-modal';

import './main.css';
import ReactLogo from '../../logo.svg';
import Cart from '../../assets/noun_cart_3888513.png';
function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [itemCount, setItemCount] = useState(0)
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      paddingTop: 0,
    }
  }
  const list = [
    {
      color: 'white',
      price: 10,
    },
    {
      color: 'red',
      price: 15.5,
    },
    {
      color: 'blue',
      price: 20,
    },
    {
      color: 'aqua',
      price: 17.5,
    },
    {
      color: 'yellow',
      price: 12,
    },
    {
      color: 'chartreuse',
      price: 20,
    },
    {
      color: 'magenta',
      price: 10,
    },
    {
      color: 'brown',
      price: 15.5,
    },
    {
      color: 'moccasin',
      price: 20,
    },
  ]
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);

  function renderItem(item) {
    return (
      <div style={{ margin: 10 }}>
        <div style={{ height: 100, width: 300, borderRadius: 20, backgroundColor: item.color, border: '1px solid black' }} />
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 20, color: 'gray' }}>Primary color</span>
        </div>
        <div style={{ display: 'flex', flex: 0.2, flexDirection: 'row' }}>
          <div style={{ display: 'flex', flex: 0.5, alignItems: 'flex-start', flexDirection: 'column', }}>
            <span style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5, color: 'black' }}>{item.color}</span>
            <span style={{ fontSize: 15, margin: 0, color: 'black' }}>${item.price.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', flex: 0.5, justifyContent: 'flex-end', paddingTop: 10 }}>
            <button style={{ width: 75, backgroundColor: '#c67ace', borderWidth: 1, borderColor: 'black', color: 'white' }} onClick={() => {
              setItemCount(itemCount + 1)
              setSum(sum + item.price)
              setCart(cart => [...cart, item]);
            }}>BUY</button>
          </div>
        </div>
      </div>
    )
  }

  const Header = () => {
    return (
      <nav>
        <div className="div-header">
          <div style={{ display: 'flex', flex: 0.1 }}>
            <img src={ReactLogo} className="logo" />
          </div>
          <div style={{ display: 'flex', flex: 0.8, justifyContent: 'center' }}>
            <p>PAGE</p>
          </div>
          {(itemCount) ? (
            <div className='cart' onClick={() => setModalVisible(!modalVisible)}>
              <div className='number'>
                <p style={{ fontSize: 15, color: 'white' }}>{itemCount}</p>
              </div>
              <img src={Cart} style={{ height: 30, width: 40, objectFit: 'cover' }}></img>
            </div>
          ) : (
            <></>
          )}
        </div>
      </nav>
    )
  }

  function renderListItem(item) {

  }

  return (
    <div >
      <Header />
      <Modal
        isOpen={modalVisible}
        style={modalStyles}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <p>Item list</p>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', borderBottom: '1px solid black', paddingBottom: 10 }}>
          <p style={{ margin: 0, marginRight: 5 }} onClick={() => setItemCount(itemCount - 1)}>&#9665;</p>
          <div style={{ border: '1px solid black', width: 20, height: 20, justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            <p style={{ margin: 0 }}>{itemCount}</p>
          </div>
          <p style={{ margin: 0, marginLeft: 5 }} onClick={() => setItemCount(itemCount + 1)}>&#9655;</p>
        </div>
        <p>Total</p>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <p>{sum}</p>
        </div>
      </Modal>
      <body className="body">
        <div >
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {list.map((item) => (
              renderItem(item)
            ))}
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
