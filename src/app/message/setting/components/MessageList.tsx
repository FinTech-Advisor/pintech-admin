import React from 'react'; // React import는 기본!
import styled from 'styled-components';
import { TableRows } from '@/app/global/components/Tables'; // 재사용 가능한 컴포넌트 잘 활용하셨네요.
import { MdCheckBoxOutlineBlank } from 'react-icons/md'; // 체크박스 아이콘

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

const MessageList = () => { // 함수형 컴포넌트 이름은 대문자로 시작!
  return (
    <>
      <StyledForm>
        <TableRows>
          <thead>
            <tr>
              <th>
                <MdCheckBoxOutlineBlank />
              </th>
              <th>쪽지 코드번호</th>
              <th>발송인</th>
              <th>수신인</th>
              <th>쪽지 상태</th>
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

export default React.memo(MessageList)