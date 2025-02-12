import React from "react"
import { MainTitle } from '@/app/global/components/StyledTitle'
import MessageListContainer from "../containers/MessageListContainer"

const MessageList = () => {
  return (
      <>
        <MainTitle>쪽지 관리</MainTitle>
        <MessageListContainer />
      </>
    )
}

export default React.memo(MessageList)
