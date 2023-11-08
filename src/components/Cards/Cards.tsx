import './cards.css';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Image } from 'primereact/image';
import { Paginator } from 'primereact/paginator';
import { useEffect, useState } from 'react';
import { eventsData, importanceArr, equipmentArr, messageArr, responsibleArr, imgArr } from "../../dummyData";
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import dayjs from 'dayjs';

interface Event {
  id?: any;
  date?: string;
  importance?: string;
  equipment?: string;
  message?: string;
  responsible?: string;
  img?: string;
}

const Cards = () => {
  const [events, setEvents] = useState<Event[]>(eventsData);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(6);
  let newArr = new Array(events.length).fill(false);
  const [readMode, setReadMode] = useState(newArr);
  const [query, setQuery] = useState("");

  const onPageChange = (e: any) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const handleKeyDown = (e: any, index: number) => {
    if (e.key === " ") {
      let newArr = readMode.map((item, i) => i === index ? true : item);
      setReadMode(newArr);
    }
  };

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  };

  const addEvents = () => {
    let currentDate = dayjs().format('DD.MM.YYYY HH:mm:ss');
    let randomIndex = getRandomInt(6);
    setEvents(prev => [...prev, {
      id: prev.length + 1,
      date: currentDate,
      importance: importanceArr[randomIndex],
      equipment: equipmentArr[randomIndex],
      message: messageArr[randomIndex],
      responsible: responsibleArr[randomIndex],
      img: imgArr[randomIndex],
    }]);
    setReadMode(prev1 => [...prev1, false]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      addEvents();
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [events, readMode]);

  return (
    <div className='table-wrapper'>
      <Toolbar
        start={
          <div>
            <h1 style={{ color: 'whitesmoke' }}>События</h1>
            <span style={{ color: 'whitesmoke', fontSize: '12px' }}>Для чтения сообщения укажите мышкой на карточку и нажмите пробел</span>
          </div>
        }
        end={<InputText onChange={event => setQuery(event.target.value)} placeholder="Поиск по сообщениям" />}
        className='toolbar'
      />
      <div className='page-wrapper'>
        {events
          .filter(item => {
            if (query === '') {
              return item;
            } else if (item?.message?.toLowerCase().includes(query.toLowerCase())) {
              return item;
            }
          })
          .slice(first, first + rows)
          .map((item) => (
            <Card key={item.id} className={!readMode[item.id - 1] ? 'card' : 'card cardRead'} tabIndex={0} onKeyDown={(e) => handleKeyDown(e, item.id - 1)}>
              <div className='cardInner'>
                <div className='cardPart1'>
                  <div className='cardField1'>
                    <div className='cardFieldTitle'>Дата</div>
                    <div className='cardFieldValue'>{item.date}</div>
                  </div>
                  <div className='cardField1'>
                    <div className='cardFieldTitle'>Важность</div>
                    <div className='cardFieldValue'>{item.importance}</div>
                  </div>
                  <div className='cardField1'>
                    <div className='cardFieldTitle'>Оборудование</div>
                    <div className='cardFieldValue'>{item.equipment}</div>
                  </div>
                </div>
                <div className='cardPart2'>
                  <div className='cardField2'>
                    <Image src={item.img} imageClassName='cardImage' />
                    <div className='cardFieldValue'>{item.responsible}</div>
                  </div>
                </div>
              </div>
              <Divider />
              {!readMode[item.id - 1] && <div className='readMark1'>Не прочтено <i className='pi pi-envelope mr-2'></i></div>}
              {readMode[item.id - 1] && <div className='readMark2'>Прочтено <i className="pi pi-check mr-2"></i></div>}
              <div className='cardField1'>
                <div className='cardFieldTitle'>Сообщение</div>
                <div className='cardFieldValue'>{item.message}</div>
              </div>
            </Card>
          ))}
      </div>
      <Paginator first={first} rows={rows} totalRecords={events.length} onPageChange={onPageChange}
        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink" 
      />
    </div>
  )
}

export default Cards;