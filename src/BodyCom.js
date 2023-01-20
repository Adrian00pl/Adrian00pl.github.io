import React from 'react'
import './BodyCss.css';
import Place from './images/person.png'
import Phone from './images/telefon.png'
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';
import Dokumentacja from './files/ZPI_sprawozdanie_semestralne_Indywidualne_Adrian_Gwiazdowski_93687-1.pdf'
const BodyCom = () => {
  return (
    <div className='main'>
      <div id='section1'></div>
      <div className='str1'>
        <div className='rectangle'></div>
        <h2>O projekcie</h2>
        <div className='op_container'>
          <img src={Phone}></img>
          <div>
            <h1>Aplikacja mobilna wspomagająca zarządzanie autem.  </h1>
            <span>Dzięki naszej aplikacji najpotrzebniejsze dane o twoim samochodzie zawsze będziesz miał pod ręką. Historia auta, użycie, serwisy, naprawy oraz koszty utrzymania będą w twojej kieszeni w formie przejrzystych danych. Najważniejsze informacje, numer polisy, telefon do serwisu lub mechanika zawsze pod ręką. Wykorzystujemy system powiadomień aby przypominać właścicielowi auta o corocznych przeglądach oraz serwisach aby pomóc ci w zadbaniu o twój samochód.</span>
          </div>
        </div>
      </div>
      <div id='section2'></div>
      <div className='str2'>
        <div className='rectangle'></div>
        <h2>O nas</h2>
        <div className='onas_container'>
          <div className='person'>
            <img src={Place}></img>
            <span>Adrian Gwiazdowski</span>
            <div>
              <p>
                Developer
              </p>
            </div>
          </div>
          <div className='person'>
            <img src={Place}></img>
            <span>Damian Szymański</span>
            <div>
              <p>
                Developer
              </p>
            </div>
          </div>
          <div className='person'>
            <img src={Place}></img>
            <span>Arkadiusz Mańczyk</span>
            <div>
              <p>
                Developer
              </p>
            </div>
          </div>
          <div className='person'>
            <img src={Place}></img>
            <span>Tomasz Dubiel</span>
            <div>
              <p>
                Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id='section3'></div>
      <div className='str3'>
        <div className='rectangle'></div>
        <h2>Harmonogram</h2>
        <div className='slider_container'>
          <div className='dots'>
            <div><span>2022.04.07</span><label htmlFor='radio_1' id='label_1'></label></div>
            <div><span>2022.04.13 </span><label htmlFor='radio_2' id='label_2'></label></div>
            <div><span>2022.04.19</span><label htmlFor='radio_3' id='label_3'></label></div>
            <div><span>2022.04.26 </span><label htmlFor='radio_4' id='label_4'></label></div>
            <div><span>2022.05.05 </span><label htmlFor='radio_5' id='label_5'></label></div>
            <div><span>2022.05.25</span><label htmlFor='radio_6' id='label_6'></label></div>
            <div><span>2022.06.13</span><label htmlFor='radio_7' id='label_7'></label></div>
          </div>
          <div className='slider'>
            <input type='radio' className='radio' name='harm' id='radio_1' />
            <input type='radio' className='radio' name='harm' id='radio_2' />
            <input type='radio' className='radio' name='harm' id='radio_3' />
            <input type='radio' className='radio' name='harm' id='radio_4' />
            <input type='radio' className='radio' name='harm' id='radio_5' />
            <input type='radio' className='radio' name='harm' id='radio_6' />
            <input type='radio' className='radio' name='harm' id='radio_7' />
            <div className='slide0' id='slide_0'>
              <span>Wybierz datę</span>
            </div>
            <div className='slide' id='slide_1'>
              <span>Spotkanie zapoznawcze z opiekunem zespołu, ogólne omówienie sposobu pracy nad projektem.</span>
            </div>
            <div className='slide' id='slide_2'>
              <span>Przedstawienie przez każdą osobę swojego tematu projektu wraz z podstawowymi funkcjonalnościami.</span>
            </div>
            <div className='slide' id='slide_3'>
              <span>Eliminacja najmniej ciekawych tematów. Dyskusja nad wyborem ostatecznego tematu. Przedstawienie przez członków zespołu dodatkowych funkcjonalności.</span>
            </div>
            <div className='slide' id='slide_4'>
              <span>Wybór ostatecznego tematu projektu- aplikacji mobilnej pomagającej zarządzać autami(podstawowe informacje o aucie, przechowywanie danych elementów eksploatacyjnych pojazdu itp.) Sporządzenie szczegółowego spisu funkcjonalności aplikacji. Wybór środowiska programistycznego.</span>
            </div>
            <div className='slide' id='slide_5'>
              <span>Sporządzenie wstępnego schematu bazy danych (tabele, typy danych, relacje). Omówienie modelu, naniesienie uwag. Ustalenie dalszych działań i podziału pracy.</span>
            </div>
            <div className='slide' id='slide_6'>
              <span>Sporządzenie i przedstawienie wstępnego wyglądu ekranów aplikacji, naniesienie uwag. Sporządzenie modelu bazy danych w DB Browser, testowanie połączenia bazy w Android Studio.</span>
            </div>
            <div className='slide' id='slide_7'>
              <span>Omówienie poprawek w wyglądzie widoków, sporządzenie sprawozdania. Omówienie obsługi powiadomień w aplikacji.</span>
            </div>

          </div>
        </div>
      </div>
      <div id='section4'></div>
      <div className='str4'>
        <div className='rectangle'></div>
        <h2>Kontakt</h2>
        <span>Email: tomasz.dubiel99@gmail.com</span>
      </div>
      <div className="first-content">
	          	<div className="first-content">
	                <h2>Dokumenty związane z <span>aplikacją</span></h2>
	                <p>Do pobrania dostępne jest sprawozdanie za semestr 6, dokumentacja projektu, prezentacja biznesowa oraz ulotka reklamowa.</p>
	            </div>
	          </div>
      <div className="container">
	          <div className="document">
	            <div className="hover">
	              <div className="row">
	                <div className="icon-img">
	                  <HiOutlineDocumentArrowDown className='hi-icon'/>
	                </div>  
	                <div className="doc-content">
	                  <h3>Raport semestralny 1</h3>
	                  <p>Semestralna kontrola stanu realizacji naszego projektu.</p>
					  <a className="btn" href="files/LingualRead_sprawozdanie_semestr_6.zip">Pobierz</a>
	                </div>
	              </div>
	            </div>
              </div>
              <div className="document">
	            <div className="hover">
	              <div className="row">
	                <div className="icon-img">
                  <HiOutlineDocumentArrowDown className='hi-icon'/>
	                </div>  
	                <div className="doc-content">
	                  <h3>Raport semestralny 2</h3>
	                  <p>Semestralna kontrola stanu realizacji naszego projektu.</p>
					  <a className="btn" href="files/LingualRead_sprawozdanie_semestr_6.zip">Pobierz</a>
	                </div>
	              </div>
	            </div>
              </div>
              <div className="document">
	            <div className="hover">
	              <div className="row">
	                <div className="icon-img">
                  <HiOutlineDocumentArrowDown className='hi-icon'/>
	                </div>  
	                <div className="doc-content">
	                  <h3>Sprawozdanie semestr 6</h3>
	                  <p>Semestralna kontrola stanu realizacji naszego projektu.</p>
					  <a className="btn" href="files/LingualRead_sprawozdanie_semestr_6.zip">Pobierz</a>
	                </div>
	              </div>
	            </div>
              </div>
              <div className="document">
	            <div className="hover">
	              <div className="row">
	                <div className="icon-img">
                  <HiOutlineDocumentArrowDown className='hi-icon'/>
	                </div>  
	                <div className="doc-content">
	                  <h3>Dokumentacja projektu</h3>
	                  <p>Semestralna kontrola stanu realizacji naszego projektu.</p>
					  <a className="btn" href={Dokumentacja} download="Dokumentacja.pdf">Pobierz</a>
	                </div>
	              </div>
	            </div>
              </div>
	        </div>
    </div>
  )
}

export default BodyCom