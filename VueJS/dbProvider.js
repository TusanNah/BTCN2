import data from '../db/data.js';

export const fetch = function (url) {
  return new Promise((resolve, reject) => {
    const { type, className, pattern, params } = getUrlParams(url);
    switch (type) {
      case 'search':
        resolve(handleSearch(className, pattern, params));
        break;
      case 'detail':
        resolve(handleDetail(className, pattern));
      case 'get':
        resolve(handleGet(className, params));
      default:
        break;
    }
  })
}

function handleSearch(className, pattern, params) {
  const { perPage, page } = params;
  let start = ((page - 1) * perPage);
  const end = perPage * page - 1;
  const result = [];
  let tempData = null;
  switch (className) {
    case 'movie':
      tempData = data.Movies;
      if (pattern) {
        tempData = data.Movies.filter((movie) => movie.title.includes(pattern) || movie.fullTitle.includes(pattern) || movie.keywords.includes(pattern));
      }
      break;
    case 'name':
      tempData = data.Names;
      if (pattern) {
        tempData = names.filter((name) => name.name.includes(pattern));
      }
      break;
    case 'top50':
      tempData = data.Top50Movies;
      if (pattern) {
        tempData = data.Top50Movies.filter((top50Movie) => top50Movie.fullTitle.includes(pattern) || top50Movie.title.includes(pattern));
      }
      break;
    case 'mostpopular':
      tempData = data.MostPopularMovies;
      if (pattern) {
        tempData = data.MostPopularMovies.filter((mostPopularMovie) => mostPopularMovie.fullTitle.includes(pattern) || mostPopularMovie.title.includes(pattern));
      }
      break;
    default:
      break;
  }
  for (let i = start; i <= end; i++) {
    if (tempData[i]) {
      result.push(tempData[i]);
    }
  }
  return {
    search: pattern,
    page: parseInt(page, 10),
    per_page: parseInt(perPage, 10),
    total_page: Math.ceil(tempData.length / perPage),
    total: tempData.length,
    items: result
  };
}

function handleDetail(className, pattern) {
  let tempData = null;
  switch (className) {
    case 'movie':
      tempData = data.Movies.find((movie) => movie.id === pattern);
      break;
    case 'name':
      tempData = data.Names.find((name) => name.id === pattern);
      break;
    case 'top50':
      tempData = data.Top50Movies.find((top50Movie) => top50Movie.id === pattern);
      break;
    case 'mostpopular':
      tempData = data.MostPopularMovies.find((mostPopularMovie) => mostPopularMovie.id === pattern);
      break;
    default:
      break;
  }
  return {
    search: pattern,
    total: tempData ? 1 : 0,
    item: tempData
  };
}

function handleGet(className, params) {
  const { perPage, page } = params;
  let start = ((page - 1) * perPage);
  const end = perPage * page - 1;
  const result = [];
  let tempData = null;
  switch (className) {
    case 'movie':
      tempData = data.Movies;
      break;
    case 'name':
      tempData = data.Names;
      break;
    case 'top50':
      tempData = data.Top50Movies;
      break;
    case 'mostpopular':
      tempData = data.MostPopularMovies;
      break;
    default:
      break;
  }
  for (let i = start; i <= end; i++) {
    if (tempData[i]) {
      result.push(tempData[i]);
    }
  }
  return {
    page: parseInt(page, 10),
    per_page: parseInt(perPage, 10),
    total_page: Math.ceil(tempData.length / perPage),
    total: tempData.length,
    items: result
  };
}


function getUrlParams(url) {
  const splittedParams = url.split('/');
  const type = splittedParams[0];
  const className = splittedParams[1];
  let pattern = splittedParams[2];
  let paramsObject = {};
  if (pattern.includes('?')) {
    pattern = splittedParams[2].split('?')[0];
    const paramStr = splittedParams[2].split('?')[1];
    const params = paramStr.split('&');
    paramsObject = params.reduce(((obj, value) => {
      const temp = value.split('=');
      if (temp[0] === 'per_page') {
        return { ...obj, perPage: parseInt(temp[1], 10) }
      }
      if (temp[0] === 'page') {
        return { ...obj, page: parseInt(temp[1], 10) }
      }
      return obj;
    }), {});
  }
  return { type, className, pattern, params: paramsObject };
}