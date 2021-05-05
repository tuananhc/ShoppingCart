import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import './main.css';
import ReactLogo from '../../logo.svg';
import Cart from '../../assets/noun_cart_3888513.png';
import { Link } from 'react-router-dom';
function App() {

  const [cart, setCart] = useState([]);
  const [cartModalVisible, setCartModalVisible] = useState(false);
  const [itemModalVisible, setItemModalVisible] = useState(false);
  const [itemCount, setItemCount] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0)
  const [size, setSize] = useState(window.innerWidth)

  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [color, setColor] = useState('')

  const handleResize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])


  const itemModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      padding: '20px 20px 10px 20px',
    }
  }
  const cartModalStyles = {
    overlay: {
      backgroundColor: ''
    },
    content: {
      position: 'absolute',
      top: '5%',
      right: 10,
      left: '60%',
      bottom: '35%',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
      paddingBottom: '30px',
      width: 200,
      display: 'flex',
      maxHeight: 400
    }
  }
  const list = [
    {
      color: 'White',
      price: 10,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      color: 'Red',
      price: 15.5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      color: 'Blue',
      price: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      color: 'Aqua',
      price: 17.5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      color: 'Yellow',
      price: 12,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      color: 'Chartreuse',
      price: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      color: 'Magenta',
      price: 10,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      color: 'Brown',
      price: 15.5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      color: 'Moccasin',
      price: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
  ]

  function renderItem(item) {
    return (
      <div style={{ margin: '10px 20px 10px 20px' }}>
        <div style={{ height: 100, width: Math.min(0.4 * size, 300), borderRadius: 20, backgroundColor: item.color, border: '1px solid black', }} />
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 20, color: 'gray' }}>Primary color</span>
        </div>
        <div style={{ display: 'flex', flex: 0.2, flexDirection: 'row' }}>
          <div style={{ display: 'flex', flex: 0.5, alignItems: 'flex-start', flexDirection: 'column', }}>
            <span style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5, color: 'black' }}>{item.color}</span>
            <span style={{ fontSize: 15, margin: 0, color: 'black' }}>${item.price.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', flex: 0.5, justifyContent: 'flex-end', paddingTop: 10 }}>
            <button
              style={{ width: 75, backgroundColor: '#aa2ee6', borderWidth: 1, borderColor: 'black', color: 'white' }}
              onClick={() => {
                setItemModalVisible(!itemModalVisible);
                setColor(item.color)
                setDescription(item.description)
                setPrice(item.price)
              }}>DETAILS</button>
          </div>
        </div>
      </div>
    )
  }

  function renderCartItem(item) {
    return (
      <div>
        <div style={{ height: 70, width: '99%', backgroundColor: item.color, justifyContent: 'flex-end', display: 'flex', alignItems: 'flex-start', margin: '20px 0 10px 0', border: '1px solid black', borderRadius: 4 }}>
          <div style={{ backgroundColor: 'black', padding: "4px 7px 6px 8px", borderRadius: 3, cursor: 'pointer' }}
            onClick={() => {
              setTotalPrice(totalPrice - item.price * item.count)
              setCart(cart.filter(citem => citem != item))
            }}>
            <text style={{ color: 'white' }}>x</text>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flex: 0.5, justifyContent: 'flex-start', }}>
            <text style={{ fontWeight: 'bold', marginRight: 5 }}>{item.color}</text>
            <text style={{ fontSize: 12 }}>x{item.count}</text>
          </div>
          <div style={{ display: 'flex', flex: 0.5, justifyContent: 'flex-end', }}>
            <text>${(item.count * item.price).toFixed(2)}</text>
          </div>
        </div>
      </div>
    )
  }

  const Header = () => {
    return (
      <nav>
        <div className="div-header">
          <div style={{ display: 'flex', flex: 0.1, }}>
            <img src={ReactLogo} className="logo" />
          </div>
          <div style={{ display: 'flex', flex: 0.8, justifyContent: 'center' }}>
            <p>SHOPPING PAGE</p>
          </div>
          {(cart.length) ? (
            <div className='cart' onClick={() => setCartModalVisible(!cartModalVisible)}>
              <div className='number'>
                <p style={{ fontSize: 15, color: 'white' }}>{cart.length}</p>
              </div>
              <img src={Cart} style={{ height: 30, width: 40, objectFit: 'cover', marginTop: 10 }}></img>
            </div>
          ) : (
            <></>
          )}
        </div>
      </nav>
    )
  }

  return (
    <div >
      <Header />
      <Modal
        isOpen={itemModalVisible}
        style={itemModalStyles}
        onRequestClose={() => {
          setItemModalVisible(!itemModalVisible)
          setItemCount(1)
        }}
      >
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'row', padding: 10 }}>
          <div style={{ paddingRight: 20, }}>
            <div style={{ backgroundColor: color, height: 150, width: 150, border: '1px solid black' }} />
          </div>
          <div>
            <p style={{ fontWeight: 'bold', marginTop: 0 }}>{color}</p>
            <p style={{ fontSize: 12 }}>{description}</p>

            <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
              <div style={{ display: 'flex', flex: 0.5, justifyContent: 'flex-start' }}>
                <p style={{ fontWeight: 'bold', marginTop: 10 }}>${price.toFixed(2)}</p>
              </div>
              <div style={{ display: 'flex', flex: 0.5, justifyContent: 'flex-end' }}>
                <div key={itemCount}>
                  <input style={{ width: 30, height: 34 }}
                    defaultValue={itemCount}
                    onChange={event => { setItemCount(parseInt(event.target.value)) }}
                  />
                </div>
                <div style={{ height: 40, width: 20, }}>
                  <button style={{ height: 20, width: 20, padding: '0 0 5px 2px' }} onClick={() => setItemCount(itemCount + 1)}>&#9651;</button>
                  <button style={{ height: 20, width: 20, padding: '0 0 5px 2px' }} onClick={() => {
                    if (itemCount > 0) {
                      setItemCount(itemCount - 1)
                    }
                  }}>
                    &#9661;
                  </button>
                </div>

                <button
                  style={{ width: 100, backgroundColor: '#aa2ee6', borderWidth: 1, borderColor: 'black', color: 'white', height: 40 }}
                  onClick={() => {
                    setItemModalVisible(!itemModalVisible)
                    if (cart.forEach(item => {
                      if (item.color === color) {
                        return true
                      } else {
                        return false
                      }
                    })) {
                      alert("dit me may")
                    }
                    if (itemCount > 0) {
                      setCart(cart => [...cart, {
                        color: color,
                        price: price,
                        count: itemCount,
                      }])
                      setTotalPrice(totalPrice + itemCount * price)
                    }
                    setItemCount(1)
                  }}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={cartModalVisible}
        style={cartModalStyles}
        onRequestClose={() => setCartModalVisible(!cartModalVisible)}
      >
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <div style={{ overflow: 'scroll', height: 350 }}>
            {cart.map((item) => {
              return (renderCartItem(item))
            })}
          </div>
          <div>
            <div style={{ display: 'flex', flex: 1, borderTop: '1px solid gray', margin: '10px 0 10px 0', borderBottom: '1px solid gray', flexDirection: 'row', }}>
              <div style={{ display: 'flex', flex: 0.5, justifyContent: 'flex-start' }}>
                <p style={{ fontWeight: 'bold' }}>Total</p>
              </div>
              <div style={{ display: 'flex', flex: 0.5, justifyContent: 'flex-end' }}>
                <p style={{ fontWeight: 'bold' }}>${totalPrice.toFixed(2)}</p>
              </div>
            </div>
            <div style={{ width: '100%', backgroundColor: '#aa2ee6', height: 35, borderRadius: 5, justifyContent: 'center', alignItems: 'center', display: 'flex', border: '1px solid black' }}>
              <Link to='checkout' style={{ fontSize: 15, color: 'white' }}>Check out</Link>
            </div>
          </div>
        </div>
      </Modal>
      <body className="body">
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
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
