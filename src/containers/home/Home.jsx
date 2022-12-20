import React from "react"
import univer from "../../assets/univer.png";
import './home.css';
import { Link } from "react-router-dom";

const Home = () => {


  return(
    <div class="responsive-container-block outer-container">
      <div class="responsive-container-block inner-container">
        <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-5 content-container">
          <div class="content-box">
            <p class="text-blk section-head">World Universities - Мировой рейтинг университетов
            </p>
            <p class="text-blk section-body"> Сервис представляет пользователю данные о более чем 200 мировых университетах.
              Вы можете ознакомиться с местонахождением каждого учебного заведения, узнать его место в мировом рейтинге,
              а так же увидеть среднюю стоимость обучения. Более того, на сайте реализована функция сортировки данных по
              нескольким полям на выбор: стоимость обучения, название и т.д.
            </p>
            <form class="formm" action="home.html">
              <Link to="/" class="btn">
                Попробовать!
              </Link>
            </form>
            <div>
              <img src={univer} class="imag"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}


export default Home