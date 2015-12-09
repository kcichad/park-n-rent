
module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('SpotRental', function(err) {
    if (err) throw err;
 
    app.models.SpotRental.create([
      {FirstName: 'Kelechi', LastName: 'Nwokonta', Owner: 1, Renter: 0, Phone: '905-818-4475',Email: 'kcichad@hotmail.com', LotNumber: 46},
      {FirstName: 'Sam', LastName: 'Phillips', Owner: 0, Renter: 1, Phone: '416-432-6578',Email: 'philsam@gmail.com', LotNumber: 46},
      {FirstName: 'Grace', LastName: 'Wang', Owner: 1, Renter: 1, Phone: '519-212-0073',Email: 'wang_g@gmail.com', LotNumber: 213},
    ], function(err, spotrentals) {
      if (err) throw err;
 
      console.log('Models created: \n', spotrentals);
    });
  });
};