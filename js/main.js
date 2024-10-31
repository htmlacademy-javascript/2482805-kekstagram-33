const PHOTOS_COUNTER = 25;
const COMMENTS_COUNTER = 30;
const AVATAR = 6;
const DESCRIPTION = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  19,
  20,
  21,
  22,
  23,
  24
];

const NAMES = [
  'Марьям',
  'Марк',
  'Артемий',
  'Алексей',
  'Иван',
  'Данила',
  'Николай',
  'Елизавета',
  'Маргарита',
  'Эмин',
  'Константин',
  'Егор',
  'Анна',
  'Ярослава',
  'Полина',
  'Стефания',
  'Евгений',
  'Милана',
  'Георгий',
  'Александра',
  'Василиса',
  'Анатолий',
  'Владислав',
  'Антон'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const like = {
  MIN : 15,
  MAX : 200,
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getComment = function (commentId) {
  const randomAvatar = getRandomInteger (0, AVATAR);
  const randomMessage = getRandomInteger (0, MESSAGES.length - 1);
  const randomName = getRandomInteger (0, NAMES.length - 1);
  return {
    id: commentId,
    avatar: `img/avatar-${randomAvatar}.svg`,
    message: MESSAGES[randomMessage],
    name: NAMES[randomName],
  };
};

const addComments = function () {
  const comments = [];
  for (let i = 0; i < COMMENTS_COUNTER; i++) {
    comments.push(getComment(i));
  }
  return comments;
};

const getObject = function (objectId) {
  const randomDescription = getRandomInteger(0, DESCRIPTION.length - 1);
  return {
    id: objectId,
    url: `photos/${objectId + 1}.jpg`,
    like: getRandomInteger(like.MIN, like.MAX),
    description: DESCRIPTION[randomDescription],
    comments: addComments()
  };
};

getObject();

const getObjects = function () {
  const photos = [];
  for(let i = 0; i < PHOTOS_COUNTER; i++) {
    photos.push(getObjects(i));
  }
  return photos;
};

getObjects();
