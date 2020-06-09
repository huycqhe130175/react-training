import React from 'react';
import { faMicrophone, faHeart, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';



function App() {
  const Container = props => (
    <div class="bg-color">
      <div class="container">{props.children}</div>
    </div>
  )

  const ButtonIcon = props => (
    <button type="button" class="btn btn-sm icon">
      <FontAwesomeIcon icon={props.icon} />
    </button>
  )

  const Item = props => (
    <div class="row bor-bottom">
      <div class="col-1">
        <span class="order" style={props.color || { color: "white" }}>{props.order}</span>
      </div>
      <div class="col-2">
        <img class="thumb pull-left" src={props.src} alt=""/>
      </div>
      <div class="col-3">
        <div class="title">{props.title}</div>
        <div class="artist">{props.artist}</div>
      </div>
      <div class="col-4">
        <span class="time">{props.time}</span>
      </div>
      <div class="col-5">
        <ButtonIcon icon={faMicrophone} />
        <ButtonIcon icon={faHeart} />
        <ButtonIcon icon={faEllipsisH} />
      </div>
    </div>
  )

  return (
    <Container>
      <Item order="1" color={{ color: "blue" }} title="em bỏ hút thuốc chưa" artist="Bích Phương, traitimtrongvang" time="03:36" src="https://avatar-nct.nixcdn.com/song/2020/05/15/c/f/3/0/1589509528823.jpg" />
      <Item order="2" color={{ color: "green" }} title="Một Cú Lừa" artist="Bích Phương" time="03:29" src="https://avatar-nct.nixcdn.com/song/2020/05/31/b/f/d/0/1590919524607.jpg" />
      <Item order="3" color={{ color: "red" }} title="Cung Đàn Vỡ Đôi" artist="Chi Pu" time="05:17" src="https://avatar-nct.nixcdn.com/song/2020/06/03/2/4/d/8/1591178120255.jpg" />
      <Item order="4" title="Tình Sầu Thiên Thu Muốn Lối" artist="Vô Đình Hiếu" time="04:18" src="https://avatar-nct.nixcdn.com/song/2020/04/20/7/4/e/1/1587352130812.jpg" />
      <Item order="5" title="Hoa Nở Không Màu" artist="Hoài Lâm" time="05:28" src="https://avatar-nct.nixcdn.com/song/2020/05/15/c/f/3/0/1589532035884.jpg" />
      <Item order="6" title="Sợ Rằng Em Biết Anh Còn Yêu Em" artist="Juun Đăng Dũng" time="05:23" src="https://avatar-nct.nixcdn.com/song/2020/02/06/1/5/7/4/1580970536614.jpg" />
      <Item order="7" title="Chân Ái" artist="nắng" time="04:23" src="https://avatar-nct.nixcdn.com/song/2020/02/17/f/6/a/4/1581934405838.jpg" />
      <Item order="8" title="Sẽ Có Một Ngày" artist="Nguyễn Hữu Thành" time="04:00" src="https://avatar-nct.nixcdn.com/song/2020/04/20/7/4/e/1/1587368167405.jpg" />
      <Item order="9" title="Đau Vậy Đủ Rồi" artist="Karik, Vũ Phụng Tiên" time="04:35" src="https://avatar-nct.nixcdn.com/song/2020/06/05/4/f/d/2/1591351964535.jpg" />
      <Item order="10" title="Nếu Có Một Ngày" artist="Hương Ly" time="04:56" src="https://avatar-nct.nixcdn.com/song/2020/05/25/a/b/2/b/1590401361623.jpg" />
      <Item order="11" title="Hãy Trao Cho Anh" artist="Sơn Tùng M-TP, Snoop Dogg" time="04:06" src="https://avatar-nct.nixcdn.com/song/2019/07/03/7/5/b/e/1562137543919.jpg" />
    </Container>
  )
}

export default App;
