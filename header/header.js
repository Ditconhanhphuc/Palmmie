// Header - croll up/down
let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Lướt xuống
    header.classList.add("header-hidden");
  } else {
    // Lướt lên
    header.classList.remove("header-hidden");
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Đảm bảo scrollTop không âm
}, false);

// Header mo thi man hinh sau mo
document.addEventListener("DOMContentLoaded", function() {
  const mainNavLinks = document.querySelectorAll('.main-nav__link');
  const bodyFooter = document.querySelectorAll('main, footer');

  mainNavLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
          // Thêm lớp hidden-body-footer vào body và footer khi hover vào main-nav__link
          bodyFooter.forEach(element => {
              element.classList.add('hidden-body-footer');
          });
      });

      link.addEventListener('mouseleave', () => {
        // Loại bỏ lớp hidden-body-footer khi không hover nữa
        bodyFooter.forEach(element => {
            element.classList.remove('hidden-body-footer');
        });
    });
  });
});

// Search bar button 
document.addEventListener("DOMContentLoaded", function() {
  const searchBar = document.getElementById('searchBar');
  const searchIcon = document.querySelector('.fa-magnifying-glass');
  const bodyFooter = document.querySelectorAll('main, footer');
  const searchInput = document.querySelector('.input-search');

  // Xử lý sự kiện khi nhấp vào biểu tượng tìm kiếm
  searchIcon.addEventListener('click', function(e) {
      e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
      searchBar.classList.toggle('show');
      if (searchBar.classList.contains('show')) {
          // Hiển thị phần .search-bar và thêm lớp .hidden-body-footer
          bodyFooter.forEach(element => {
              element.classList.add('hidden-body-footer');
          });
          // Thêm sự kiện clickOutside khi hiển thị phần searchBar
          document.addEventListener('click', clickOutside);
      } else {
          // Ẩn phần .search-bar và loại bỏ lớp .hidden-body-footer
          bodyFooter.forEach(element => {
              element.classList.remove('hidden-body-footer');
          });
          // Loại bỏ sự kiện clickOutside khi ẩn searchBar
          document.removeEventListener('click', clickOutside);
      }
  });

// Hàm xử lý enter hoặc click vào icon tìm kiếm
document.addEventListener("DOMContentLoaded", function() {
  const searchBar = document.getElementById('searchBar');
  const searchIcon = document.querySelector('.fa-magnifying-glass');
  const searchInput = document.querySelector('.input-search');

  // Xử lý sự kiện khi nhấp vào biểu tượng tìm kiếm
  searchIcon.addEventListener('click', function(e) {
      e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
      search();
  });

  // Xử lý sự kiện khi người dùng nhấn phím Enter trong ô input
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        console.log('Enter key pressed');
        search();
    }
});

  // Hàm thực hiện tìm kiếm và chuyển hướng trang
  function search() {
      const searchTerm = searchInput.value.trim();
      if (searchTerm !== '') {
          // Chuyển hướng trang đến trang tìm kiếm với tham số là từ khóa tìm kiếm
          window.location.href = 'search.html?keyword=' + encodeURIComponent(searchTerm);
      }
  }
});


  // Xử lý sự kiện khi click ra ngoài phần .search-bar
  function clickOutside(event) {
      if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
          searchBar.classList.remove('show');
          // Loại bỏ lớp .hidden-body-footer khi click ra ngoài
          bodyFooter.forEach(element => {
              element.classList.remove('hidden-body-footer');
          });
          document.removeEventListener('click', clickOutside);
      }
  }

  // Thêm sự kiện cho input khi có thay đổi giá trị
  searchInput.addEventListener('input', function() {
      // Lưu giá trị nhập vào ở đây hoặc xử lý nó theo nhu cầu
      const searchTerm = this.value.trim(); // Lấy giá trị nhập vào và loại bỏ khoảng trắng đầu và cuối
      // Xử lý tìm kiếm với giá trị searchTerm
  });
});


// Giu cho phan header-main-nav duoc hien thi khi hover vao
document.addEventListener("DOMContentLoaded", function() {
  // Lấy tất cả các .main-nav__link-container
  const linkContainers = document.querySelectorAll('.main-nav__link-container');

  // Lặp qua từng .main-nav__link-container
  linkContainers.forEach(linkContainer => {
      // Thêm sự kiện mouseenter
      linkContainer.addEventListener('mouseenter', () => {
          // Thêm lớp 'active' vào .main-nav__link-container
          linkContainer.classList.add('active');
      });

      // Thêm sự kiện mouseleave
      linkContainer.addEventListener('mouseleave', () => {
          // Loại bỏ lớp 'active' khỏi .main-nav__link-container
          linkContainer.classList.remove('active');
      });
  });

  // Lấy tất cả các .subnav
  const subnavs = document.querySelectorAll('.subnav');

  // Lặp qua từng .subnav
  subnavs.forEach(subnav => {
      // Thêm sự kiện mouseover
      subnav.addEventListener('mouseover', () => {
          // Thêm lớp 'active' vào .subnav
          subnav.classList.add('active');
      });

      // Thêm sự kiện mouseout
      subnav.addEventListener('mouseout', () => {
          // Loại bỏ lớp 'active' khỏi .subnav
          subnav.classList.remove('active');
      });
  });

  // Lấy tất cả các .main-nav__link
  const mainNavLinks = document.querySelectorAll('.main-nav__link');

  // Lặp qua từng .main-nav__link
  mainNavLinks.forEach(link => {
      // Thêm sự kiện mouseenter
      link.addEventListener('mouseenter', () => {
          // Tìm .subnav trong .main-nav__link hiện tại và thêm lớp 'active'
          const subnav = link.querySelector('.subnav');
          if (subnav) {
              subnav.classList.add('active');
          }
      });

      // Thêm sự kiện mouseleave
      link.addEventListener('mouseleave', () => {
          // Tìm .subnav trong .main-nav__link hiện tại và loại bỏ lớp 'active'
          const subnav = link.querySelector('.subnav');
          if (subnav) {
              subnav.classList.remove('active');
          }
      });
  });
});
