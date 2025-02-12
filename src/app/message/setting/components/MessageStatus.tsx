import React from 'react'
import styled from 'styled-components'
import { TableRows } from '@/app/global/components/Tables'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'

const StyledForm = styled.form`
  
    th:nth-of-type(1) { width: 5%; min-width: 40px; }
    th:nth-of-type(2) { width: 15%; min-width: 100px;}
    th:nth-of-type(3) { width: 20%; min-width: 120px;}
    th:nth-of-type(4) { width: 20%; min-width: 120px;}
    th:nth-of-type(5) { width: 40%; }

    td {
      text-align: center;
    }
`

const MessageStatus = () => {
  return (
    <>
      <StyledForm>
        <TableRows>
          <thead>
            <tr>
              <th>
                <MdCheckBoxOutlineBlank />
              </th>
              <th>차단유저 명단</th>
              <th>차단 상태</th>
              <th>차단 기한</th>
              <th>차단 사유</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="no-data">
                쪽지가 없습니다.
              </td>
            </tr>
          </tbody>
        </TableRows>
      </StyledForm>
    </>
  )
}

export default React.memo(MessageStatus)