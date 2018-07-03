import {store} from '../store/store'
// 네비게이션 가드(인증여부를 체크) 로그인 안된경우 글쓰기 제한
export default (to, from, next) => {
  if (store.state.user) { // 매개변수에 있는 이것들이 모두 들어있을 경우에만
    // next로 넘겨줌
    next()
  } else {
    next('/signin') // next에 인자를 넣어주면 해당 url로 넘어가게 된다
  }

  // to : 이동할 url
  // from : 현재 url
  // next : to에서 지정한 url로 이동하기 위해 꼭 호출해야하는 함수
}
