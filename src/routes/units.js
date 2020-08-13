const router = require("express").Router();

module.exports = db => {
  
  router.get("/units", (request, response) => {

    db.query(
      `
      SELECT *
      FROM units
    `,
    ).then(({ rows: results }) => {
      // console.log(user);
      response.json(results);
    });
  });


  router.post("/unit/create", (request, response)=>{

    const { unit, rent, sqft, bedroom, tmi, notes, propertyId  } = request.body
    let issues = {}



    db.query(
    `
    INSERT INTO units
    (unit, sqft, rent, bedroom, tmi, notes, issues, propertyID)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `,
    [unit, sqft, rent, bedroom, tmi, notes, issues, propertyId]
    ).then((res) => {
      console.log(res, 'res!!!!!!!!!!!!!!!!!!')
      response.json(res.rows.results);
    });

  })


  router.patch("/unit/edit/:unitid", (request, response)=>{

    const unitid = request.params.unitid
    console.log(unitid)
    console.log(request.body)

    const { unit, rent, sqft, bedroom, tmi, notes, unitId  } = request.body

    db.query(
    `
      UPDATE units
      SET
      unit = $1,
      sqft = $2,
      rent = $3,
      bedroom = $4,
      tmi = $5,
      notes = $6

      WHERE unit_id = $7
 
    `,
    [unit, sqft, rent, bedroom, tmi, notes, unitId]
    ).then((res) => {
      console.log(res, 'res!!!!!!!!!!!!!!!!!!')
      response.json(res.rows.results);
    });

  })

  

  router.get("/units/:propertyId", (request, response) => {

    propertyId = request.params.propertyId;

    db.query(
      `
      SELECT *
      FROM units
      WHERE propertyID = $1
    `,
      [propertyId]
    ).then(({ rows: results }) => {
      // console.log(user);
      response.json(results);
    });
  });
  
  router.get("/unit/:unitId", (request, response) => {
    console.log('getting 1 unit')
    unitId = request.params.unitId;

    db.query(
      `
      SELECT *
      FROM units
      WHERE unit_id = $1
    `,
      [unitId]
    ).then(({ rows: results }) => {
      // console.log(user);
      response.json(results);
    });
  });

  



  return router;
};
