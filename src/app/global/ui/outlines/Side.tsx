'use client'

import React, { useContext } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import CommonContext from '../../contexts/CommonContext'
import colors from '../../styles/colors'
import sizes from '../../styles/sizes'
import { RxActivityLog } from "react-icons/rx";
import { GiMoneyStack, GiBank } from 'react-icons/gi'
import { FaCreditCard } from 'react-icons/fa'
import { BsFilePostFill } from 'react-icons/bs'
import { FaRegMessage } from 'react-icons/fa6'
import { MdManageAccounts } from "react-icons/md";

const { big } = sizes

const { lavendor, darklavendor, dark } = colors

const StyledMenus = styled.aside`
  min-height: 800px;
  background: ${lavendor};

  a {
    color: ${dark};
    font-size: ${big};
    display: block;
    height: 55px;
    line-height: 53px;
    text-align: center;
  }

  a.on {
    background: ${darklavendor};
    color: ${dark};
  }

  a + a {
    border-top: 2px solid ${darklavendor};
  }
`

const Side = () => {
  const {
    state: { menuCode },
  } = useContext(CommonContext)

  return (
    <StyledMenus>
      <a
        href="/member/list"
        className={classNames({ on: menuCode === 'member' })}
      >
        회원 관리
      </a>
      <a
        href="/board/config/list"
        className={classNames({ on: menuCode === 'board' })}
      >
        게시판 관리
      </a>
      <a href="/bank/setting/list" 
      className={classNames({ on: menuCode === 'bank' })}>
        은행 관리
      </a>
      <a href="/card/list" 
      className={classNames({ on: menuCode === 'card' })}>
        카드 관리
      </a>
      <a href="/loan/list" 
      className={classNames({ on: menuCode === 'loan' })}>
        대출 관리
      </a>
      <a
        href="/message/setting/list"
        className={classNames({ on: menuCode === 'message' })}
      >
        쪽지 관리
      </a>
      
    </StyledMenus>
  )
}

export default React.memo(Side)
