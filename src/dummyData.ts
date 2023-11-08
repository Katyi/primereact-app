import image1 from './assets/user1.jpeg';
import image2 from './assets/user2.jpeg';
import image3 from './assets/user3.jpeg';
import image4 from './assets/user4.jpeg';
import image5 from './assets/user5.jpeg';

export const eventsData = [
  {
    id: 1,
    date: '10.12.2022 10:00:14',
    importance: 'Высокая',
    equipment: 'Вегас',
    message: 'Сервер Вегас недоступен',
    responsible: 'Смирнов В.А.',
    img: image1,
  },
  {
    id: 2,
    date: '10.12.2022 10:00:15',
    importance: 'Низкая',
    equipment: 'Коммутатор',
    message: 'Потеряно сетевое соединение',
    responsible: 'Капустин С.С.',
    img: image2,
  },
  {
    id: 3,
    date: '10.12.2022 10:00:15',
    importance: 'Низкая',
    equipment: 'Люк',
    message: 'Открыта крышка',
    responsible: 'Ветрова И.С.',
    img: image3,
  },
  {
    id: 4,
    date: '10.12.2022 10:00:15',
    importance: 'Высокая',
    equipment: 'ИБП',
    message: 'Низкий заряд батареи',
    responsible: 'Лавочкин А.В.',
    img: image4,
  },
  {
    id: 5,
    date: '10.12.2022 10:00:15',
    importance: 'Критическая',
    equipment: 'Трансформатор-1',
    message: 'Недостаточное количество масла',
    responsible: 'Ольшанская Е.Г.',
    img: image5,
  },
  {
    id: 6,
    date: '10.12.2022 10:00:15',
    importance: 'Критическая',
    equipment: 'ЛВС',
    message: 'Обрыв силового кабеля',
    responsible: 'Ветрова И.С.',
    img: image3,
  },
  {
    id: 7,
    date: '10.12.2022 10:00:15',
    importance: 'Высокая',
    equipment: 'Трансформатор-2',
    message: 'Отсутствует подтверждение пуска в работу',
    responsible: 'Смирнов В.А.',
    img: image1,
  },
];

export const importanceArr = ['Высокая', 'Низкая', 'Низкая' , 'Высокая', 'Критическая', 'Критическая', 'Высокая'];

export const equipmentArr = ['Вегас', 'Коммутатор', 'Люк', 'ЛВС', 'Трансформатор-1', 'ИБП', 'Трансформатор-2'];

export const messageArr = ['Сервер Вегас недоступен', 'Потеряно сетевое соединение', 'Открыта крышка', 'Низкий заряд батареи', 'Недостаточное количество масла',
  'Обрыв силового кабеля', 'Отсутствует подтверждение пуска в работу'
];

export const responsibleArr = ['Смирнов В.А.', 'Капустин С.С.', 'Ветрова И.С.', 'Лавочкин А.В.', 'Ольшанская Е.Г.', 'Ветрова И.С.', 'Смирнов В.А.'];

export const imgArr = [image1, image2, image3, image4, image5, image3, image1];