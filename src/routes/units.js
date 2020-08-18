const router = require("express").Router();

module.exports = db => {
  
  router.get("/units", (request, response) => {

    db.query(
      `
      SELECT *
      FROM units
    `,
    ).then(({ rows: results }) => {
      response.json(results);
    });
  });


  router.post("/unit/create", (request, response)=>{

    const { unit, rent, sqft, bedroom, tmi, notes, propertyId, occupied  } = request.body
    let issues = []

    console.log(request.body)

    db.query(
    `
    INSERT INTO units
    (unit, sqft, rent, bedroom, tmi, notes, issues, occupied, propertyID)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `,
    [unit, sqft, rent, bedroom, tmi, notes, issues, occupied, propertyId]
    ).then((res) => {
      response.json(res.rows.results);
    }).catch(err=> console.log(err))

  })

  router.patch("/unit/editissues/:unitid", (request, response)=>{

    const unitid = request.params.unitid

    const { issues, unitId } = request.body

    console.log(request.body, 'issues')
    console.log(unitid, 'unitid...')

    db.query(
    `
      UPDATE units
      SET
      issues = issues::jsonb || $1::jsonb

      WHERE unit_id = $2
 
    `,
    [request.body, unitid]
    ).then((res) => {
      response.json(res.rows.results);
    });

  })


  router.patch("/unit/edit/:unitid", (request, response)=>{

    const unitid = request.params.unitid

    const { unit, rent, sqft, bedroom, tmi, notes, unitId, occupied  } = request.body

    db.query(
    `
      UPDATE units
      SET
      unit = $1,
      sqft = $2,
      rent = $3,
      bedroom = $4,
      tmi = $5,
      notes = $6,
      occupied= $8

      WHERE unit_id = $7
 
    `,
    [unit, sqft, rent, bedroom, tmi, notes, unitId, occupied]
    ).then((res) => {
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
      response.json(results);
    });
  });
  
  router.get("/unit/:unitId", (request, response) => {
    unitId = request.params.unitId;

    db.query(
      `
      SELECT *
      FROM units
      WHERE unit_id = $1
    `,
      [unitId]
    ).then(({ rows: results }) => {
      response.json(results);
    });
  });

  router.delete("/unit/:unitId", (request, response) => {

    const unitId = request.params.unitId;
    return db.query(
      `
      DELETE
      FROM tenants
      WHERE unitID = $1

    `,
      [unitId]
    ).then(x=>{
      console.log('dont delting tenants')
      db.query(
        `
        DELETE
        FROM units
        WHERE unit_id = $1
        `,
        [unitId]
      )
    }).then((res) => {
      response.json('ok!');
    });
  });




  return router;
};
