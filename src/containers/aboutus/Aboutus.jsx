
import "./aboutus.css";
import React from "react";
import { Link } from "react-router-dom";

import danil from "../../assets/danil.png";
import danir from "../../assets/danir.png";
import dinar from "../../assets/dinar.png";
import robert from "../../assets/robert.png";

const Aboutus = () => {

  return(
    <div className="responsive-container-block outer-container">
      <div className="responsive-container-block inner-container">
        <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-5 content-container">
          <div className="content-box">
            <p className="text-blk section-head">Наша команда
            </p>
            <p className="text-blk section-body">Над проектом работали студенты Уфимского университета наук и технологий Факультета информатики и робототехники
              группы ПРО-329. На карточках представлены члены нашей команды, а так же расписаны их роли.
              Данир Ямалиев занимался разработкой back-end части проекта, а именно обработку и вывод данных.
              Данил Салимов и Роберт Набиев отвечали за дизайн и вёрстку страниц сайта. Динар Нугуманов будучи неким тимлидом, занимался как front-, так и back-end'ом.
            </p>
            <Link to="/home" className="btn">
                Узнать больше о проекте
              </Link>

          </div>

        </div>
        <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-8 team-cards-outer-container">
          <div className="responsive-container-block team-cards-inner-container">
            <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container">
            <a href="https://vk.com/bavedro" target="_blank" class="none">
              <div className="card">
                <div className="img-box">
                  <img src={dinar}
                    className="person-img" />
                </div>
                <div className="card-content-box">
                  <p className="text-blk person-name">Динар Нугуманов
                  </p>
                  <p className="text-blk person-info">Full-Stack developer
                  </p>
                </div>
              </div>
            </a>
            </div>
            <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container">
            <a href="https://vk.com/bavedro" target="_blank" class="none">
              <div className="card">
                <div className="img-box">
                  <img src={danir}
                    className="person-img" />
                </div>
                <div className="card-content-box">
                  <p className="text-blk person-name">Данир Ямалиев
                  </p>
                  <p className="text-blk person-info">Back-End developer
                  </p>
                </div>
              </div>
            </a>
            </div>
            <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container">
            <a href="https://vk.com/bavedro" target="_blank" class="none">
              <div className="card">
                <div className="img-box">
                  <img src={danil}
                    className="person-img" />
                </div>
                <div className="card-content-box">
                  <p className="text-blk person-name">Данил Салимов
                  </p>
                  <p className="text-blk person-info">Front-End developer
                  </p>
                </div>
              </div>
            </a>
            </div>
            <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container">
              <a href="https://vk.com/bavedro" target="_blank" class="none">
              <div className="card">
                <div className="img-box">
                  <img src={robert}
                    className="person-img" />
                </div>
                <div className="card-content-box">
                  <p className="text-blk person-name">Роберт Набиев
                  </p>
                  <p className="text-blk person-info">Front-End developer
                  </p>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus;