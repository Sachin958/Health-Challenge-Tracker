const url = 'https://animenewsnetwork.p.rapidapi.com/reports.xml?id=155&nlist=50&nskip=50';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9990ad7d47mshd73f8d13654be5ap10f39fjsn6c710cdf7775',
		'x-rapidapi-host': 'animenewsnetwork.p.rapidapi.com'
	}
};

// try {
// 	const response =  fetch(url, options);
// 	const result =  response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


    let result =  fetch(url , options);
    let resultjson = result.json();
    console.log(resultjson);
