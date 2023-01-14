import React, { useState } from "react";


// (Anapara / 100) * (Faiz Oranı / 365) * Gün Sayısı = Günlük Faiz Getirisi

function App() {


  const [myMoney, setMyMoney] = useState();
  const [date, setDate] = useState();
  const [total, setTotal] = useState();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setTotal(myMoney * (1.5 / 100) * date)
    setIsActive(true)
  }


  return (
    <div className="allpage">
      {/* MY MONEY */}
      <div className="moneydv">
        <h2> Hesap Açılış Tutarı </h2>
        <div className="in-moneydv">
          <div className="for-top-input">
            <input
              id="myMoney"
              type="text"
              maxLength="6"
              onChange={(m) => setMyMoney(m.target.value)}
              onKeyPress={
                (event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
            />
            <div className="money-bottom">
              <p>1.000 </p>
              <p>100.000</p>
            </div>
          </div>
          <div>
            <h2 className="try">TRY</h2>
          </div>

        </div>
      </div>


      {/* FAİZ ZAMANI */}
      <div className="monthdv">
        <h2>Hesapta Kalacağı Süre </h2>
        <div className="in-monthdv">
          <div className="for-bot-input">
            <input
              id="month"
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              maxLength="2"
              type="text"
              onChange={(d) => setDate(d.target.value)}
            />
            <div className="month-bottom">
              <p>3 </p>
              <p>36</p>
            </div>
          </div>
          <div>
            <h2 className="ay">AY</h2>
          </div>
        </div>
      </div>


      {/* BUTON */}

      <button className="buton"
        disabled={myMoney >= 100000 ? true :
          myMoney <= 999 ? true :
            date >= 37 ? true :
              date <= 2 ? true :
                false}
        onClick={handleClick}
      >Hesapla</button>

      {/* AÇIKLAMALAR */}
      <div className="result">

        <div className="final-faiz">
          <div> Faiz Oranı </div>
          <div>%1,5</div>
        </div>

        <div className="final-faiz">
          <div>Faiz Geliri</div>
          <div>{total} TRY</div>
        </div>

        <div className="final-bakiye">
          <div>Vade Sonu Bakiye</div>
          <div> {isActive && Number(myMoney) + Number(total)} TRY </div>
        </div>



      </div>


    </div>
  );
}

export default App;

