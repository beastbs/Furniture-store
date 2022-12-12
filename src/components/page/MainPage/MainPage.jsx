import { Link } from "react-router-dom";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page__products">
        <div className="main-page__wrapper">
          <Link to="products">Показать все товары</Link>
        </div>
      </div>
      <div className="main-page__desc">
        <h1>Доступная роскошь в Киеве — магазин House staff</h1>
        <p>
          Мебельные гарнитуры из качественных и дорогих материалов стоят не
          дешево. Но если вы хотите подчеркнуть свой статус и отменный вкус,
          обратите внимание на стильные предметы интерьера, способные стать
          настоящим сокровищем и украсят гостиную, спальню, кухню. В чем же
          разница между элитной мебелью и стандартной? Только дорогая мебель
          проработана до мельчайших деталей, каждая из которых тщательно
          продумана опытными дизайнерами ведущих мировых мебельных компаний. При
          ее производстве использованы материалы исключительного качества.
          Купить элитную мебель можете в интернет-магазине House staff. В
          каталоге вы найдете мебельные изделия в различных стилях: классика,
          модерн, барокко, рококо и других. каждый найдет для себя то, что
          наиболее подходит под стилистику интерьера в своем доме или офисе.
          Также, вы можете приехать в наш салон элитной мебели в Киеве и
          увидеть, и потрогать мебель.
        </p>
        <h2>Доступная роскошь — для истинных ценителей мебели</h2>
        <p>
          При производстве высококачественной эксклюзивной мебели использовалась
          древесина ценных пород деревьев, отличающаяся следующими качествами:
        </p>
        <ul>
          <li>
            Изысканность внешнего вида. Это касается фактуры и благородности
            оттенка полученного изделия — красноватый, коричневатый.
          </li>
          <li>Отменная прочность изделия.</li>
          <li>
            Натуральные материалы — экологически безопасные для здоровья
            человека. И если вы предпочитаете натуральность в интерьере, то
            такая мебель — ваш лучший друг.
          </li>
          <li>
            Долговечность. Она прочна и надежна. И не только за счет самого
            дерева, но и лакокрасочных материалов из которых делают покрытие на
            гарнитур.
          </li>
          <li>
            Многие деревянные изделия украшаются декоративными резными
            элементами, которые придают совершенство через детали. Они
            выполняются умелыми мастерами вручную. Такие элементы помогают
            придать каждому изделию индивидуальность и неповторимость.
          </li>
        </ul>
        <p>
          Достоинства элитной мебели все не оспоримы. Она обладает
          привлекательностью внешнего вида. Ведь каждая деталь ее проработана до
          мелочей. Будь это мебель для спальни или в детскую комнату — над
          каждой коллекцией эксклюзивных мебельных аксессуаров трудится целая
          команда опытных дизайнеров. А кровати в детскую и вовсе выглядят, как
          настоящий шедевр. Все выполняется с учетом последних модных тенденций
          и основных направлений по стилям.
        </p>
        <p>
          В нашем магазине элитной мебели вашему вниманию предлагается мебель в
          разнообразных вариантах. Здесь найдете и нежную пастельную, и
          насыщенную темную, и с инкрустациями из натуральных материалов,
          например, камня или тканей. У нас можно даже купить раскладной диван.
        </p>
        <p>
          Такая мебель отличается высокой прочностью и отменным качеством.
          Конечно, стоит помнить, что элитные изделия требуют более бережного к
          себе отношения. Некоторые материалы нельзя мочить. Есть много нюансов.
          Но если проявить должное внимание правильному и качественному уходу,
          то такая мебель прослужит не один десяток лет.
        </p>
      </div>
    </div>
  );
};

export default MainPage;
