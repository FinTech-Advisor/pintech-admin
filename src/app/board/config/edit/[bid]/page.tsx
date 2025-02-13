// EditPage.tsx (수정 - 방법 1)
'use client'
import React from 'react'
import loadable from '@loadable/component'
import { MainTitle } from '@/app/global/components/StyledTitle'
import WithUserContainer from '@/app/global/containers/WithUserContainer'

const ConfigContainer = loadable(
  () => import('../../containers/ConfigContainer'),
)

// 새 컴포넌트 생성
const EditContent = ({bid} : {bid: string}) => {
    return(
        <>
          <MainTitle>게시판 설정 수정</MainTitle>
          <ConfigContainer bid={bid} />
        </>
    )
}

// params = 경로변수인 bid
const EditPage = ({ params }) => {
  const { bid } = React.use<{ bid: string }>(params)

  return <WithUserContainer UserContainer={EditContent} />
}

export default React.memo(EditPage)