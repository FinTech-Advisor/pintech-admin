import React from "react"
import { MainTitle } from '@/app/global/components/StyledTitle'
import MessageStatusContainer from "../containers/MessageStatusContainer"

const MessageStatus= () => {
  return (
        <>
          <MainTitle>쪽지 상태설정</MainTitle>
          <MessageStatusContainer />
        </>
      )
}

export default React.memo(MessageStatus)
