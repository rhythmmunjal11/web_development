let rectangle = [

    {no:10 , name1:'rahul'},
    {no:29},
    {no:37}

];

for (let value1 of Object.entries(rectangle)) {
    console.log(value1);
}

// [ '0', { no: 10, name1: 'rahul' } ]
// [ '1', { no: 29 } ]
// [ '2', { no: 37 } ] // key value pair of rectangle where 0 , 1 ,2 are keys