const Calendar = function({date}) {

  const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const addMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  const day = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  let firstDayOfWeek = firstDay.getDay();
  if (firstDayOfWeek === 0) {
    firstDayOfWeek = 7;
  } 
  let startDate = new Date();
  startDate.setDate(firstDay.getDate() - firstDayOfWeek + 1);  

  const printMonth = function() {
    let check = true;
    let resultMonth = [];
    while (check) {
      if ((startDate.getMonth() <= firstDay.getMonth()) || (startDate.getFullYear() < firstDay.getFullYear())) {
        resultMonth.push(<tr>{printWeek()}</tr>);
      } else {
        check = false;
      }
    }
    console.log(resultMonth)
    return resultMonth;
  }

  const printWeek = function() {
    let resultWeek = [];
    for(let i = 0; i < 7; i++) {
      if (startDate.getMonth() !== firstDay.getMonth()) {
        resultWeek.push(<td className="ui-datepicker-other-month">{startDate.getDate()}</td>);
      } else if ((startDate.getDate() === date.getDate()) && (startDate.getMonth() === date.getMonth())) {
        resultWeek.push(<td className="ui-datepicker-today">{startDate.getDate()}</td>);
      } else {
        resultWeek.push(<td>{startDate.getDate()}</td>)
      }
      startDate.setDate(startDate.getDate() + 1);
    }
    console.log(resultWeek)
    return resultWeek;
  }


  return (
    <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">{day[date.getDay()]}</div>
          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
            <div className="ui-datepicker-material-month">{addMonth[date.getMonth()]}</div>
            <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
          </div>
        </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month[date.getMonth()]}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
  
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end"/>
          <col className="ui-datepicker-week-end"/>
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>

        <tbody>
          {printMonth()}
        </tbody>

      </table>
    </div>
  )
}
  