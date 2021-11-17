import React, { memo, Suspense, lazy } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import { isMobile } from 'is-mobile'

const EmbedComponent = lazy(() => import('./Embed'))

Modal.setAppElement('#modal-root')

const Loader = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #000;
    animation: spinner 0.6s linear infinite;
  }
`

const CloseBtn = styled.button`
  z-index: 10;
  border: 0;
  cursor: pointer;
  background: #222;
  border-radius: 50px;
  display: inline-block;
  width: 20px;
  height: 20px;
  overflow: hidden;
  text-decoration: none;
  padding: 0;
  font-size: 10px;
  color: white;
  line-height: 2;
  box-shadow: 1px 1px 3px #999;
  position: absolute;
  right: -10px;
  top: -10px;

  span {
    text-indent: 100px;
  }

  &::before {
    content: '✕';
    display: block;
  }
`

const style = {
  overlay: {
    zIndex: 1000,
    background: 'rgba(0,0,0,.5)',
  },
  content: {
    overflow: 'visible',
    color: 'black',
    background: 'none',
    border: 0,
    padding: 0,
    right: 'calc(2vw + 10px)',
    top: 'calc(2vw + 10px)',
    left: 'calc(2vw + 10px)',
    bottom: 'calc(2vw + 10px)',
  },
}

const useScrollBodyLock = () => {
  const lock = () => {
    if (isMobile()) {
      const scrollY = `${window.scrollY}px`
      const body = document.body
      body.style.position = 'fixed'
      body.style.top = `-${scrollY}`
      return
    }
  }

  const unlock = () => {
    if (isMobile()) {
      const body = document.body
      const scrollY = body.style.top
      const parsedScrollY = parseInt(scrollY || '0') * -1

      body.style.position = ''
      body.style.top = ''

      if (parsedScrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
      return
    }
  }

  return { lock, unlock }
}

export default memo(({ close, id }) => {
  const { lock, unlock } = useScrollBodyLock()

  return (
    <Modal
      onAfterOpen={lock}
      onAfterClose={unlock}
      style={style}
      onRequestClose={close}
      isOpen={!!id}
    >
      <CloseBtn onClick={close}>
        <span>close</span>
      </CloseBtn>

      {id && (
        <Suspense fallback={<Loader />}>
          <Loader>
            <EmbedComponent id={id} />
          </Loader>
        </Suspense>
      )}
    </Modal>
  )
})
