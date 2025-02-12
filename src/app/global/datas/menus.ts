export const menus = {
    member: [{ code: 'list', name: '회원목록', url: '/member/list' }],
    board: [
      { code: 'configList', name: '게시판 목록', url: '/board/config/list' },
      { code: 'configWrite', name: '게시판 등록', url: '/board/config/write' },
      { code: 'configEdit', name: '게시판 수정', url: '/board/config/edit/[bid]' },
      { code: 'list', name: '게시글 관리', url: '/board/list' }],
    message: [
      { code: 'messageList', name : '쪽지 목록', url: '/message/setting/list'},
      { code: 'messageStatus', name : '쪽지 상태설정', url: '/message/setting/status'}]
    
    
  }
  
  export default function getMenus(menuCode) {
    return menus[menuCode] ?? []
  }