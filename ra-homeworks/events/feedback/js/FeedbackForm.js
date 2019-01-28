'use strict';

function FeedbackForm(input) {

  const 
    data = input.data,
    onSubmit = function listener(event) {
      event.preventDefault();
      const
        form = event.currentTarget.elements,
        finalData = {};
      for(let key of Object.keys(data)) {
        if (key === 'snacks') {
          finalData[key] = Array.from(form[key])
            .filter(field => field.checked)
            .map(element => element.value);
        } else {
          finalData[key] = form[key].value
        }
      }
      input.onSubmit(JSON.stringify(finalData));
    }

  return (
    <form className="content__form contact-form" onSubmit={onSubmit}>
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      
      <div className="contact-form__input-group">
        <input 
          defaultChecked={data.salutation}
          className="contact-form__input contact-form__input--radio" 
          id="salutation-mr" 
          name="salutation" 
          type="radio" 
          value="Мистер"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
        <input 
          defaultChecked={data.salutation}
          className="contact-form__input contact-form__input--radio" 
          id="salutation-mrs" 
          name="salutation" 
          type="radio" 
          value="Мисис"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
        <input 
          defaultChecked={data.salutation}
          className="contact-form__input contact-form__input--radio" 
          id="salutation-ms" 
          name="salutation" 
          type="radio" 
          value="Мис"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
      </div>
      
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name">Имя</label>
        <input 
          defaultValue={data.name}
          className="contact-form__input contact-form__input--text" 
          id="name" 
          name="name" 
          type="text"/>
      </div>
  
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input 
          defaultValue={data.email}
          className="contact-form__input contact-form__input--email" 
          id="email" 
          name="email" 
          type="email"/>
      </div>
  
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select 
          defaultValue={data.subject}
          className="contact-form__input contact-form__input--select" 
          id="subject" 
          name="subject">
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>

      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea 
          defaultValue={data.message}
          className="contact-form__input contact-form__input--textarea" 
          id="message" 
          name="message" 
          rows="6" 
          cols="65">
        </textarea>
      </div>
  
      <div className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input 
          defaultChecked={data.snacks}
          className="contact-form__input contact-form__input--checkbox" 
          id="snacks-pizza" 
          name="snacks" 
          type="checkbox" 
          value="пицца"/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
        <input 
          defaultChecked={data.snacks}
          className="contact-form__input contact-form__input--checkbox" 
          id="snacks-cake" 
          name="snacks" 
          type="checkbox" 
          value="пирог"/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
      </div>

      <button className="contact-form__button" type="submit">Отправить сообщение!</button>
      <output id="result" />
    </form>
  );
}