const mksProducts = async () => {
  const answer = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await answer.json();
  console.log(response);
  return response;
};

export default mksProducts;
