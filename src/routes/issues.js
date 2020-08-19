const router = require("express").Router();

module.exports = db => {
  
  router.get("/issues", (request, response) => {

    db.query(
      `
      SELECT *
      FROM issues
    `,
    ).then(({ rows: results }) => {
      response.json(results);
    });
  });

  router.get("/issues/:unitID", (request, response) => {

    const unitID = request.params.unitID
    console.log(request.params)

    db.query(
      `
      SELECT *
      FROM issues

      WHERE unitID = $1
    `, [unitID]
    ).then(({ rows: results }) => {
      response.json(results);
    });
  });


  router.post("/issue/create", (request, response)=>{

    const {  unitID  } = request.body
    const {name, status, notes}= request.body.issueDetail

    console.log(request.body)

    db.query(
    `
    INSERT INTO issues
    (name, status, notes, unitID)
      VALUES ($1, $2, $3, $4)
    `,
    [name, status, notes, unitID]
    ).then((res) => {
      response.json(res.rows.results);
    }).catch(err=> console.log(err))

  })

  router.patch("/issue/:issueid", (request, response)=>{
    console.log('updating issue')
    const issueid = request.params.issueid

    const { name, status, notes, } = request.body
    console.log(issueid)

    db.query(
    `
      UPDATE issues
      SET
      name = $1,
      status = $2,
      notes = $3

      WHERE issue_id = $4
 
    `,
    [name, status, notes, issueid]
    ).then((res) => {
      response.json(res.rows.results);
    });

  })


  
  // router.delete("/unit/:unitId", (request, response) => {

  //   const unitId = request.params.unitId;
  //   return db.query(
  //     `
  //     DELETE
  //     FROM tenants
  //     WHERE unitID = $1

  //   `,
  //     [unitId]
  //   ).then(x=>{
  //     console.log('dont delting tenants')
  //     db.query(
  //       `
  //       DELETE
  //       FROM units
  //       WHERE unit_id = $1
  //       `,
  //       [unitId]
  //     )
  //   }).then((res) => {
  //     response.json('ok!');
  //   });
  // });




  return router;
};
