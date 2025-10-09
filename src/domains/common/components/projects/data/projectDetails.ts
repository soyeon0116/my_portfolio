import { Project } from '../types/projectType';

export const projectDetails: Record<string, Project> = {
  portfolio: {
    title: 'Portfolio',
    period: '2025.10',
    github: 'https://github.com/soyeon0116/my_portfolio',
    demo: '/',
    pages: [
      {
        name: '전체',
        tasks: [
          '상단의 nav를 클릭시 해당 영역으로 스크롤 되도록 작업',
          '컴포넌트화를 통해 파일의 간결성을 유지하도록 작업하였으며, 정보를 화면에 표현하기 위해 각 상새 내용을 구조화하여 별도의 데이터 파일로 분리하여 확장성, 유지보수, 재사용성을 고려하여 작업',
          'Parallel Routes를 활용하여 상세 정보를 모달 형태로 출력하도록 제작하여 사용자가 새로고침 하더라도 내용을 확인할 수 있어, 사용자 흐름을 방해하지 않도록 사용자 경험을 고려하여 작업',
        ],
        images: '/images/portfolio/portfolio_main.png',
      },
    ],
  },
  cherry: {
    title: 'Cherry',
    period: '2025.08 ~ 2025.09',
    github: 'https://github.com/DEEPDIVE-PROJECT-200/cherry-frontend',
    demo: 'https://200-cherry.vercel.app/',
    pages: [
      {
        name: '로그인',
        tasks: [
          '카카오 oAuth를 활용하여 간편 로그인 기능을 제작',
          '기존에 가입된 회원이라면 메인페이지로 이동되고, 신규 가입 회원이라면 닉네임과 아이디를 입력받는 페이지로 이동되도록 제작',
          '사용자에게 닉네임과 아이디를 입력 받고, 기존의 회원과 중복되지 않는지 중복 확인 진행 후 가입 완료 진행되도록 제작',
        ],
        images: '/images/cherry/cherry_login.png',
      },
      {
        name: '상품 상세',
        tasks: [
          '상품 상세 데이터를 출력 하도록 제작하였으며, 제품 색상의 경우 색상의 이름과 헥사코드를 COLORS를 객체로 분리하여 유지보수성과 확장성을 높이도록 제작',
          '장바구니에 담기 기능을 제작하였으며, Tanstack Query를 활용하여 헤더의 장바구니 아이콘에 개수를 출력하도록 제작',
          '바로 결제하기도 가능하도록 제작하였으며, 선택시 체험 신청 페이지로 이동 되도록 제작',
        ],
        images: '/images/cherry/cherry_product.png',
      },
      {
        name: '장바구니',
        tasks: [
          '사용자가 담아놓은 데이터를 출력하며 삭제 또는 결제를 진행할 수 있도록 제작',
          '사용자가 상품을 삭제할 수 있도록 제작',
          '결제할 상품을 선택하여 미리 가격을 확인할 수 있도록 제작되었으며, 사용자가 결제할 상품을 선택하지 않을 경우 하단의 결제 버튼을 비활성화 하여 불필요한 클릭을 방지하고, 인터페이스의 직관성을 높이도록 제작',
        ],
        images: '/images/cherry/cherry_cart.png',
      },
      {
        name: '체험 신청(결제)',
        tasks: [
          '장바구니 페이지에서 결제를 누른 경우와 상품 상세 페이지에서 바로 결제 버튼을 누른 경우에 대하여 분기 처리 하여 제작',
          '달력 라이브러리를 활용하여 사용자가 날짜를 직관적으로 확인할 수 있도록 제작하였으며, 불가능한 날짜를 비활성화 하여 사용자 편의성을 높이도록 제작',
          '다음 도로명 API를 호출하여 주소를 입력받도록 제작',
          '유효성 검사를 진행하였으며, 사용자가 미입력한 영역이 어디인지 스크롤로 이동되어 사용자 편의성을 높일 수 있도록 제작',
        ],
        images: '/images/cherry/cherry_pay.png',
      },
      {
        name: '리포트',
        tasks: [
          '리포트 작성 가능 탭과 이미 작성한 리포트 탭을 분리하여 확인할 수 있도록 제작',
          '무한 스크롤 기능을 적용하여 초기 로딩 데이터를 최소화하여 성능 최적화에 신경써서 제작',
        ],
        images: '/images/cherry/cherry_report.png',
      },
      {
        name: '마이',
        tasks: ['사용자의 개인 페이지에 대한 UI 작업 진행'],
        images: '/images/cherry/cherry_my.png',
      },
    ],
  },
  goormMusic: {
    title: 'Goorm Music',
    period: '2025.07 ~ 2025.08',
    github: 'https://github.com/soyeon0116/goorm-music',
    demo: 'https://goorm-music.vercel.app/',
    pages: [
      {
        name: '메인',
        tasks: [
          '로그인 사용자와 미로그인 사용자를 분기 처리하여 서로 다른 데이터를 출력하도록 제작',
          '분기 처리 과정중 로그인 정보를 서버에서 가져오며 api 무한 요청 오류가 발생하였고, 조건부 렌더링 부분을 클라이언트 컴포넌트에서 진행하도록 수정',
          '스켈레톤 UI를 추가하여 사용자 경험을 높이도록 제작',
          '음악 리스트 바 형식을 공통 컴포넌트화 하여 코드의 재사용성을 높임',
        ],
        images: '/images/goormMusic/goorm_main.png',
      },
      {
        name: '플레이리스트',
        tasks: [
          '사용자가 제작한 플레이리스트, 팔로우한 플레이리스트를 출력하고, 수정, 삭제가 가능하도록 제작',
          '팔로우한 플레이리스트의 경우 사용자가 수정이 불가능 하도록 플레이리스틔 owner를 기준으로 분기 처리하고, 버튼과 기능을 분리함',
          '컴포넌트 분리, 연관 Props들을 Zustand로 관리하도록 리팩토링을 진행해 기존에 227줄이었던 코드를 47줄로 축소',
        ],
        images: '/images/goormMusic/goorm_playlist.png',
      },
      {
        name: '검색',
        tasks: [
          '관련된 아티스트, 앨범, 플레이리스트, 곡을 확인할 수 있도록 제작',
          '곡의 "더 많은 곡 확인하기" 클릭시 해당 검색어와 관련된 다양한 곡들을 확인할 수 있도록 제작',
          '아티스트 클릭시 아티스트 상세페이지로 이동되며, 앨범 클릭시 앨범 상세페이지로 이동되도록 제작하였으며, 플레이리스트 클릭시 플레이리스트의 상세페이지로 이동되며, 해당페이지에서 플레이리스트를 팔로우/팔로우 취소를 할 수 있도록 제작',
        ],
        images: '/images/goormMusic/goorm_search.png',
      },
      {
        name: '아티스트',
        tasks: [
          '아티스트의 팔로워수, 인기있는 곡, 앨범을 확인할 수 있도록 제작',
          '곡의 좋아요 상태 변경, 플레이리스트 추가 기능을 사용할 수 있도록 제작',
        ],
        images: '/images/goormMusic/goorm_artist.png',
      },
      {
        name: '앨범',
        tasks: [
          '앨범 커버 이미지, 앨범 정보, 앨범 수록곡들을 확인할 수 있도록 제작',
          '곡의 좋아요 상태 변경, 플레이리스트 추가 기능을 사용할 수 있도록 제작',
        ],
        images: '/images/goormMusic/goorm_album.png',
      },
      {
        name: '장르',
        tasks: [
          '장르와 관련된 인기 곡들을 출력하여 사용자가 장르와 관련된 곡들을 확인할 수 있도록 제작',
          '개발 모드의 Spotify API 에서 장르 추천을 더용하지 않아서, 여러가지의 조합을 시도하여 search와 장르를 결합하여 데이터 출력을 완성',
        ],
        images: '/images/goormMusic/goorm_genre.png',
      },
    ],
  },
};
