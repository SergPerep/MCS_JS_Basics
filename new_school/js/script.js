let newSchool = [
  [
    ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
    ['Sonny Digital', 'Metro Boomin', '12Hunna']
  ],
  [
    ['Yung Lean', 'Ecco2K', 'Bladee'],
    ['Whitearmor', 'PJ Beats', 'Yung Gud']
  ]
];

newSchool.forEach((school) => {
	school.forEach((list) => {
		list.forEach(person => console.log(person));
	});
});

/*

// Если нужно показать, кто реппер, а кто продюссер

newSchool.forEach((school) => {
	school[0].forEach(rapper => console.log("Rapper: " + rapper));
	school[1].forEach(producer => console.log("Producer: " + producer));
});

*/