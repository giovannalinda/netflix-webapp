import * as S from './Modal.styled'
import { ReactNode } from 'react'
import ReactDOM from 'react-dom'

import { FiX } from 'react-icons/fi'

type Props = {
  isOpen?: boolean
  children?: ReactNode
  onClose: () => void
}

const Modal = ({ onClose, children, isOpen = false }: Props) => {
  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <S.Modal>
      <S.Container>
        <button onClick={onClose} style={{ background: 'none' }}>
          <FiX size={20} />
        </button>
        {children}
      </S.Container>
    </S.Modal>,
    document.body,
  )
}

export default Modal
