// add code in here to create an API with ExpressJS
const express = require('express');
const app = express();

// enable the static folder...
app.use(express.static('public'));

// import the dataset to be used here

const PORT = process.env.PORT || 4017;

// API routes to be added here

app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});

// import the dataset to be used here
const garments = require('./garments.json');

app.get('/api/garments', function(req, res){
	// note that this route just send JSON data to the browser
	// there is no template
	res.json({garments});
});

// console.log(garments)


app.get('/api/garments/gender/:gender/season/:season', function(req, res){

	const gender = req.params.gender;
	const season = req.params.season;
console.log(season);


	const filteredGarments = garments.filter(garment => {

        
		// if both gender & season was supplied
        // console.log(gender!= 'ALL' && season != 'ALL');
		// if (gender != 'ALL') {
        //     return garment.gender === gender   
        // }else if(season != 'ALL'){
        //     return garment.season === season
        // } else
        
        if(gender!= 'ALL' && season != 'ALL'){
            console.log('season and gender');
             return garment.gender === gender && garment.season === season
        }else if(season != 'ALL'){
                return garment.season === season
            }
        
	});

    // console.log(filteredGarments);
	// note that this route just send JSON data to the browser
	// there is no template
	res.json({ 
		garments : filteredGarments
	});
});